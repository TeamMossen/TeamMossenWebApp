import React, { Component } from 'react'
import { GetDb } from '../scripts/dbHandler';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedProjs: []
    };
  }
  componentDidMount(){
    this.setState. fetch("http://localhost:8000/user")
              .then((response) => response.json())
              .then((data) => {
                this.state.fetchedProjs = data.map()
              });
  }
  render() {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            fetch("http://localhost:8000/")
              .then((response) => response.json())
              .then((payload) => {
                console.log(payload);
              });
          }}
        >
          Fetch List
        </button>
      </>
    );
  }
}
