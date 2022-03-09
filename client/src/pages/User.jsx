import React, { Component } from 'react'
import ProjectsTable from '../components/ProjectsTable';
import { GetDb } from '../scripts/dbHandler';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedProjects: [],
      projectsFetched: false
    };
  }
  componentDidMount(){
    fetch("http://localhost:8000/user")
    .then((response) => response.json())
    .then((data) => { 
      this.setState({
      fetchedProjects: data,
      projectsFetched: true
    });
  });
    
  }
  render() {

    if (!this.state.projectsFetched)
    {
        return (
            <h2>Loading...</h2>
        )
    }
    if (this.state.projectsFetched)
    {
      return(
        <>
          <ProjectsTable props={this.state.fetchedProjects} />
        </>
      )
    }
  }
}
