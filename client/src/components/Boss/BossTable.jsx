import React from 'react'
import Table from 'react-bootstrap/Table';
import BossTableRow from './BossTableRow';

export default function BossTable({span,users}) {

    return (
      <>
      {console.log(users)}
      <div className='container container-boss'>
          <div className='row'>
            <div className='col'></div>
            <div className='col-6 text-center col-md-auto title-day-report'><h2>Time Report day view</h2></div>
            <div className='col'></div>
          </div>
          <div className='row'>
              <div className='col my-col'>
                  <Table striped bordered hover>
                      <thead>
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
              </div>
          </div>
      </div>
    
      </>
  )
}

