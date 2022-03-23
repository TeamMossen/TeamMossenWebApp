import React, { Component, useState } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'
import BossTable from '../components/Boss/BossTable.jsx';
import { Container, Row, Col,Button,ButtonGroup} from 'react-bootstrap'


export default class Boss extends Component {
  constructor() {
    
    super();
    this.state={
      datWeek:"date"
    }
  }
  updateDatWeek(value){
    this.setState({datWeek:value})
  }
 
  render() {
   
    let datWeek ="date";
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
              <input className='form-control' type={this.state.datWeek} placeholder='Worked hours' id="date" name="worked-hours"></input>
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
            <Col xs={7} md={12} ><BossTable></BossTable></Col>
            <Col></Col>
          </Row>
        </Container>
        </div>
          
        
        </>
    )
  }
 
}
