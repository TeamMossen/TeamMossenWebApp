import React, { Component} from 'react'
import BossTable from '../components/Boss/BossTable.jsx';
import { Container, Row, Col,Button,ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Boss extends Component {
  constructor() {
    super();
    this.state={
      datWeek:"date",
      span:"day",
      users: []
    }
  }
  updateDatWeek(value){
    this.setState({datWeek:value})
    if(value == "date")
      this.setState({span: "day"})
    else
      this.setState({span: "week"})
  }

    handleClick = () => {
    let date = document.getElementById('date').value;
    fetch(`http://localhost:8000/boss/getWorkedHours?span=${this.state.span}&when=${date}`,
      {
        method: "GET",
      })
       .then(res => res.json())
       .then(json => {
        this.setState({users: json});
       })
  }
 
  render() {
   
    return (
        <>
        {console.log(this.state.users)}
        <div className='boss-div'>
        <Container>
          <Row className='row-push-down'>
            <Col className='p-5 col-title-day-view'>
              <h2>Boss view gangsta</h2>
            </Col>
          </Row>
          <Row className='p-4'>
            <Col md={5} className="p-3"  >
              <div className='input-group date-picker'>
                <span className="input-group-text" id="basic-addon1">date</span>
                <input className='form-control' type={this.state.datWeek} placeholder='Worked hours' onChange={this.handleClick} id="date" name="worked-hours"></input>
              </div>
            </Col>
            <Col xs={{offset:3}} sm={{offset:4}} md={{ span: 1, offset: 3 }}>
              
              <ButtonGroup className='btn-group' size="lg">
                <Button onClick={() => this.updateDatWeek("week")}>Weeks</Button>
                <Button onClick={() => this.updateDatWeek("date")}>Day</Button>
              </ButtonGroup>
                
            </Col>
          </Row>
          <Row>
            <Col></Col>
              <Col sm={8} md={12} >
                <BossTable users={this.state.users}></BossTable>
              </Col>
            <Col></Col>
          </Row>
        </Container>
        </div>
          
      
        </>
    )
  }
 
}
