import React, { Component } from 'react'
import ProjectsTable from '../components/ProjectsTable';
import TimereportInput from '../components/TimereportInput';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedProjects: [],
      projectsFetched: false
    };
  }
  componentDidMount(){
    fetch("http://localhost:8000/activeProjects")
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
        <div className='background-div'>
            <img className='ica-pic' src={require("../static/images/icastampel.jpg")} alt="bild på stämpelklocka"></img>
          </div>
          <div className=''>
            <img className="myPic" src={require("../static/images/clock.png")} alt="En klocka" />
          </div>
          
          <TimereportInput></TimereportInput>
          <ProjectsTable props={this.state.fetchedProjects} />
        </>
      )
    }
  }
}
