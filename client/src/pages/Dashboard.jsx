import React, { Component, useState } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'

export default class Dashboard extends Component {
  render() {
    //const [state, setState] = useState('page')
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
      <>
        <NavbarComp userData={userData}/>
      
      </>
    )
  }
}
