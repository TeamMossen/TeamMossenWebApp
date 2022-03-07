import React, { Component } from 'react'
import { GetDb } from '../scripts/dbHandler';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedProjs: []
    };
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
