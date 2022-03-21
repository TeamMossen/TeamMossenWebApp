import React, { Component } from 'react';
import Axios from 'axios';
import ProjectsTable from '../components/ProjectsTable';
import ManagerProjectTable from '../components/ManagerProjectTable';
import TimereportInput from '../components/TimereportInput';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: JSON.parse(localStorage.getItem('userData')),
      fetchedProjects: [],
      projectsFetched: false
    };
  }
  componentDidMount(){
    // fetch("http://localhost:8000/data").then(res =>
    //   console.log(res.json)
    // );


    const token = localStorage.getItem('token')
    console.log(this.state.userData);
    const url = this.state.userData.role == "User" ? "http://localhost:8000/getProjects?status=active" : "http://localhost:8000/getProjects";
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/json'
      })
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
    console.log(this.state.fetchedProjects);
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
          {(this.state.userData.role == "ProjectManager" || this.state.userData.role == "Boss") &&
           <ManagerProjectTable props={this.state.fetchedProjects} />
          
          }
          {(this.state.userData.role == "User") &&
            <ProjectsTable props={this.state.fetchedProjects} />
          }
        </>
      )
    }
  }
}
