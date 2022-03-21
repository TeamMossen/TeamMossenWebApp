import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../logo.svg';


export default function NavbarComp({userData, activePage}) {
   // userData = userData.token;
   //console.log(activePage("test"));
//    changePage = () => {
     //activePage("user");
//     }
    function handleClick() {
        activePage("user");
        //console.log("hello hello?");
    }
    return (
        <Navbar className='nav-color' variant="light" expand="lg">
            <Container fluid>
                <Navbar.Brand><img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo" />
                    App text
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto"> {/* my-2 my-lg-0 style={{ maxHeight: '100px' }} navbarScroll */}
                        <button className="nav-link" onClick={() => handleClick()}>time report</button>
                        {(userData.role == "ProjectManager" || userData.role == "Boss") && <>
                            <NavLink className="nav-link" to="/pmpage1">PM page 1</NavLink>
                            <NavLink className="nav-link" to="/pmpage2">PM page 2</NavLink> </>
                        }
                        {userData.role == "Boss" &&
                            <NavLink className="nav-link" to="/boss">Boss page</NavLink>
                        }
                        
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
