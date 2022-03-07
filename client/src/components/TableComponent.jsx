import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import TableRowComponent from './TableRowComponent';

export default class TableComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            projects: props
        };
    }

  render() {
    if(this.state.projects)
    {
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Hours</th>
              <th>Worked Hours</th>
              <th>Timespan</th>
            </tr>
          </thead>
          <tbody>
              {this.state.projects.map((project) => 
                  <TableRowComponent proj = {project} />
              )}
          </tbody>
        </Table>
      );
   }
   else {
     return (
       <div>
         <h1>Loading Projects..</h1>
       </div>
     )
   }
  }
}
