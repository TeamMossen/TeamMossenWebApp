import React, { Component, useState } from 'react'
import User from './User'
import NavbarComp from '../components/NavbarComp.jsx'
import Boss from './Boss'

export default class Dashboard extends Component {
    State = {
        page:"user"
    }

    activePage = (page = "user") => {
        //use dataFromChild
        this.State.page = page;
        console.log(this.State.page);
        this.forceUpdate();
    }

    componentDidMount(){
        //this.activePage();
    }

    render() {
       
       
        //const [state, setState] = useState('page')
        const userData = JSON.parse(localStorage.getItem('userData'));
        return (
            <>
                <NavbarComp activePage={this.activePage} userData={userData} />
                {
                    this.State.page == "user" &&
                    <User></User> 
                    || this.State.page == "boss" &&
                    <Boss></Boss> 
                }
            </>
        )
    }
}
