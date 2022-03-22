import React, { Component } from 'react'
import NavbarComp from '../components/NavbarComp.jsx'

export default class Boss extends Component {
  render() {
    return (
        <>
            <div className="boss-div">
                <img
                    src={require("../static/images/bossBack.jpg")}
                    alt="background pic"
                ></img>
            </div>
        </>
    )
  }
}
