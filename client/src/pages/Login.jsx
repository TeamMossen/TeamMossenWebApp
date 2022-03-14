import React, { Component } from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap'
import { Stack, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {

  }

  componentDidMount() {
    const {pathname} = this.props.history.location;
  }

  render() {
    return (
      <>
        <Stack
          gap={2}
          className="col-md-2 mx-auto"
          style={{ marginTop: "20%" }}
        >
          <h1>Log in with Notion account!</h1>
          <Button
            variant="secondary"
            href={
              "https://api.notion.com/v1/oauth/authorize?owner=user&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-callback&client_id=d40705cf-c529-499f-b726-4365426a33ac"
            }
          >
            Log in
          </Button>
        </Stack>
        {console.log(this.state.url)}

        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Project Manager</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Boss</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Admin</Dropdown.Item>
            <NavLink className="nav-link" to="/user">User</NavLink>
          </DropdownButton> 
                    <Button variant="secondary" onClick={this.fetchOauthUrl}>Log in</Button> */}
      </>
    );
  }
}
