import React from 'react'
import Table from 'react-bootstrap/Table';
import BossTableRow from './BossTableRow';
import { Container, Row, Col} from 'react-bootstrap'

export default function BossTable({span,users}) {

    return (
      <>
      
      <Container>
            <Row>
              <Col className='container-boss'>
                  <Table hover>
                      <thead>
                          <tr>
                              <th className='title-day-report'>Worker name</th>
                              <th className='title-day-report'>{span}</th>
                              <th className='title-day-report'>Hours</th>
                          </tr>
                          <tr>
                              <th className='title-day-report'>Worker name</th>
                              <th className='title-day-report'>{span}</th>
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

