import React, { Component } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'

export default class Dashboard extends Component {
  render() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
      <>
      <NavbarComp userData={userData}/>
      
      </>
    )
  }
}
