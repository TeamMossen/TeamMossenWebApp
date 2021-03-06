import React, { Component } from 'react';
import Axios from 'axios';
import ProjectsTable from '../components/User/ProjectsTable';
import ManagerProjectTable from '../components/ProjectManager/ManagerProjectTable';
import TimereportInput from '../components/User/TimereportInput';
import Loading from '../components/Loading.jsx';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),
      fetchedProjects: [],
      projectsFetched: false,
    };
  }
  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  fetchProjects = (rerender = false) => {
   // await this.sleep(1000);
    const token = localStorage.getItem("token");
    const url =
      this.state.userData.role == "User"
        ? "http://localhost:8000/user/getProjects?status=active"
        : "http://localhost:8000/user/getProjects";
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          fetchedProjects: data,
          projectsFetched: true,
        });
        console.log(data);
      });
      if (rerender) {
        //console.log(this.state.fetchedProjects);
        this.forceUpdate();
      }
  };
  
  componentDidMount() {
    this.fetchProjects();
  }
  render() {
    if (!this.state.projectsFetched) {
      return <Loading></Loading>;//loading page
    }
    if (this.state.projectsFetched) {
      return (
        <>
          
          <div className="background-div">
          <TimereportInput projects={this.state.fetchedProjects}user={this.state.userData}fetchProjects={this.fetchProjects}/>
          {(this.state.userData.role == "ProjectManager" ||
            this.state.userData.role == "Boss") && (
            <ManagerProjectTable props={this.state.fetchedProjects} />
          )}
          {this.state.userData.role == "User" && (
            <ProjectsTable props={this.state.fetchedProjects} />
          )}
         </div> 
        </>
      );
    }
  }
}
