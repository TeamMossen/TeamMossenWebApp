import React, { Component } from 'react'
import { Stack, Button, Container} from 'react-bootstrap'
import  { Navigate } from 'react-router-dom';
import Axios from 'axios';
import history from "history/browser";

export default class Login extends Component {
  state = {
    redirect: false
  }
  socialLogin = async () => {
    try {
        const { search } = history.location; // the search variable contains every string after the `?` mark with the `?` inclusive
        const code = search.split('=')[1].split('&')[0]; // to get the value of the code query param.
        const res = await Axios.get(`http://localhost:8000/oauth-callback?code=${code}&redirect_uri=localhost:3000/finished`)

        if (res.data.success) {
          // request was successful
          localStorage.setItem('token', 'Bearer ' + res.data.token); // Store the token from this request in the local storage
          localStorage.setItem('userData', res.data.userData);
          console.log(localStorage.getItem('userData'));
          this.setState({redirect: true});
        } else {
          console.log('failed to auth');
        }
      } catch (err) {
        console.error(err)
      }
  }
  componentDidMount() {
    const { pathname } = history.location;

    if(localStorage.getItem('userData')) { return this.setState({ redirect: true}) }

    if (pathname === '/oauth-callback') {
      this.socialLogin();
    }
    fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((data) => { 
      console.log(data);
    });
  }

  render() {
    if (this.state.redirect)
    {
      return <Navigate to="/dashboard"/>
    }
    return (
      <div class="loginBackground d-flex align-items-center justify-content-center ">
        <div class="loginContainer">
          <Stack
            gap={ 4 }
          >
            <div>
              <h1>Log in with Notion account!</h1>
            </div>
            <Button
              variant="outline-primary"
              size="lg"
              href={
                "https://api.notion.com/v1/oauth/authorize?owner=user&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-callback&client_id=d40705cf-c529-499f-b726-4365426a33ac"
              }
            >
              Log in
            </Button>
          </Stack>
        </div>
        {console.log(this.state.url)}

        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Project Manager</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Boss</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Admin</Dropdown.Item>
            <NavLink className="nav-link" to="/user">User</NavLink>
          </DropdownButton> 
                    <Button variant="secondary" onClick={this.fetchOauthUrl}>Log in</Button> */}
      </div>
    );
  }
}
