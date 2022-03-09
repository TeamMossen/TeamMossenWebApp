import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import ProjectTableRow from './ProjectTableRow';

export default class ProjectsTable extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
          projects: props
        }
    }

  render() {

    if (this.state.projects)
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
              {this.state.projects.props.map((project, key) => 
                  <ProjectTableRow proj = {project} key= {key}/>
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
