import React, { Component } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'

export default class Dashboard extends Component {
  render() {
      let tempToken = {
          Role:"Boss"
      }
    return (
      <>
      <NavbarComp token={tempToken}/>
      
      </>
    )
  }
}
