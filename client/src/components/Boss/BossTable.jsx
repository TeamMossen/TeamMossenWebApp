import React from 'react'
import Table from 'react-bootstrap/Table';
import BossTableRow from './BossTableRow';
import { Container, Row, Col} from 'react-bootstrap'

export default function BossTable({span,users}) {
   // console.log(users);
  return (
      <>
      
      <Container className='container-boss'>
          <Row>
            <Col></Col>
            <Col className='text-center title-day-report'>
                <h2>Time Report day view</h2>
            </Col>
            <Col></Col>
          </Row>
          <Row>
              <Col className='my-col'>
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th className='title-day-report'>Worker name</th>
                              {/* <th className='title-day-report'>{span}</th> */}
                              <th className='title-day-report'>Hours</th>
                          </tr>
                      </thead>
                      <tbody className='title-day-report'>
                          {
                          users.map((user,key) =>(
                            <BossTableRow user={user} key={key}/>)
                          )
                          }
                          
                      </tbody>
                  </Table>
              </Col>
          </Row>
      </Container>
    
      </>
  )
}

