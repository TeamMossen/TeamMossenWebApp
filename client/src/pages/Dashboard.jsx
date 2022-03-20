import React, { Component } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'

export default class Dashboard extends Component {
  render() {
      let userData = localStorage.getItem('userData');

    return (
      <>
      <NavbarComp token={userData}/>
      
      </>
    )
  }
}
