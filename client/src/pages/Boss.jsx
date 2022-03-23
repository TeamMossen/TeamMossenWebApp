import React, { Component } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'
import BossTable from '../components/Boss/BossTable.jsx';
import BossDate from '../components/Boss/Bossdate.jsx';
import { Container, Row, Col,  Button} from 'react-bootstrap'


export default class Boss extends Component {
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
              <BossDate></BossDate>
            </Col>
            <Col>
              <Row>
                <Col></Col>
                <Col xs={6}><Button variant="primary" size="md">View day report</Button></Col>
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
