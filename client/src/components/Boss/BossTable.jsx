import React from 'react'
import Table from 'react-bootstrap/Table';
import BossTableRow from './BossTableRow';

export default function BossTable() {
  return (
      <div className='container container-boss'>
          
          <div className='row'>
            <div className='col'></div>
            <div className='col text-center'><h2>Time report day view</h2></div>
            <div className='col'></div>
          </div>
          <div className='row'>
              <div className='col my-col'>
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th>Worker name</th>
                              <th>Day</th>
                              <th>Hours</th>
                          </tr>
                      </thead>
                      <tbody>
                          <BossTableRow></BossTableRow>
                      </tbody>
                  </Table>
              </div>
          </div>
      </div>
  )
}

