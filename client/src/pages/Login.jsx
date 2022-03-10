import React, { Component } from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { GetDb } from '../scripts/dbHandler';

export default class Login extends Component {

  componentDidMount(){
    fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((data) => { 
      console.log(data);
    });
  }

  render() {

    return (
      <>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Project Manager</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Boss</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Admin</Dropdown.Item>
          <NavLink className="nav-link" to="/user">User</NavLink>
          </DropdownButton>
      </>
    );
  }
}
