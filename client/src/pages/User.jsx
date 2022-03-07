import React, { Component } from 'react'
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
    var requests = fetch("http://localhost:8000/user")
    .then((response) => response.json())
    .then((data) => this.setState({
      fetchedProjects: response,
      projectsFetched: true
    }));


    this.setState.fetch("http://localhost:8000/user")
              .then((response) => response.json())
              .then((data) => {
                this.state.fetchedProjs = data.map()
              });
  }
  render() {

    if (!this.state.DataFetched)
    {
        return (
            <h2>Loading...</h2>
        )
    }
    if()
  }
}
