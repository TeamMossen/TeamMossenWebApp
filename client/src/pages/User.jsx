import React, { Component } from 'react';
import Axios from 'axios';
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
    const token = localStorage.getItem('token')
    console.log(token);
    fetch("http://localhost:8000/activeProjects", {
      method: 'POST',
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({authorization: 'blalsdfla'}),
    })
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
          
            <img className="myPic" src={require("../static/images/clock.png")} alt="En klocka" />
          
          <TimereportInput props={this.state.fetchedProjects}/>
          <ProjectsTable props={this.state.fetchedProjects} />
         
          
        </>
      )
    }
  }
}
