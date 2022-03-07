import React, { Component } from 'react'
import TableComponent from '../components/TableComponent';
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
    fetch("http://localhost:8000/user")
    .then((response) => response.json())
    .then((data) => { 
      this.setState({
      fetchedProjects: data,
      projectsFetched: true
    });
    console.log(data);
  });
    
  }
  render() {

    if (!this.state.DataFetched)
    {
        return (
            <h2>Loading...</h2>
        )
    }
    if (this.state.DataFetched)
    {
      return(
        <>
          <TableComponent props={this.state.fetchedProjects} />
        </>
      )
    }
  }
}
