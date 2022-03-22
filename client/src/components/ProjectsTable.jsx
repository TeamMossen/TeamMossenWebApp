import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import ProjectTableRow from './ProjectTableRow';

export default class ProjectsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.props.properties
    }
  }
  render() {

    if (this.state.projects)
    {
      return (
        <div className='container table-time-report'>
          <div className='row'>
            <div className='col'></div>
            <div className='col text-center'><h2>Project Table</h2></div>
            <div className='col'></div>
          </div>
        <div className='row'>
          <div className='col'>
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
                {this.state.projects.map((project, key) => (
                  <ProjectTableRow proj={project} key={key} />)
                )}
              </tbody>
            </Table>
          </div>
        </div>
        </div>
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
