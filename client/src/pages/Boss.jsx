import React, { Component} from 'react'
import BossTable from '../components/Boss/BossTable.jsx';
import { Container, Row, Col,Button,ButtonGroup} from 'react-bootstrap'


export default class Boss extends Component {
  constructor() {
    super();
    this.state={
      datWeek:"date",
      users: [
        {
            "id": "1df97150-9ec1-4963-8c57-2bea7328248b",
            "name": "Alex Olave",
            "hours": 0
        },
        {
            "id": "48befd5f-6ca1-480e-b9dc-7d653472be06",
            "name": "Henrik Zetterström",
            "hours": 15
        },
        {
            "id": "f9273bd0-4eb0-4b69-bb34-b4105585150c",
            "name": "Anton Sjöberg",
            "hours": 0
        }
    ]
    }
  }
  updateDatWeek(value){
    this.setState({datWeek:value})
  }
  setsetstate(data)
  {
    this.setState({users: data})
  }
  async handleClick() {
    let date = document.getElementById('date').value;
    let users = await fetch(`http://localhost:8000/boss/getWorkedHours?span=day&when=${date}`,
      {
        method: "GET",
      })
       .then(res => res.json());
       this.setState(users);
       console.log(users);
       this.forceUpdate();
  }
 
  render() {
   
    return (
        <>
        
        <div className='boss-div'>
        <Container>
          <Row className='row-push-down'>
            <Col></Col>
          </Row>
          <Row className='row-button-bossdate'>
            <Col className='col-title-day-view'><h2>Select date for day view</h2></Col>
            <Col>
            <div className='input-group'>
              <span className="input-group-text" id="basic-addon1">date</span>
              <input className='form-control' type={this.state.datWeek} placeholder='Worked hours' onChange={() => this.handleClick()} id="date" name="worked-hours"></input>
          </div>
            </Col>
            <Col>
              <Row>
                <Col></Col>
                <Col xs={6}> 
                  <ButtonGroup size="lg">
                    <Button onClick={() =>this.updateDatWeek("week")}>Weeks</Button>
                    <Button onClick={() =>this.updateDatWeek("date")}>Day</Button>
                  </ButtonGroup>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col></Col>
              <Col xs={7} md={12} >
                <BossTable users={this.state.users} span={this.state.datWeek}></BossTable>
              </Col>
            <Col></Col>
          </Row>
        </Container>
        </div>
          
      
        </>
    )
  }
 
}
