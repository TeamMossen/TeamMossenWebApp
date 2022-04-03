import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../static/logo.png';


export default function NavbarComp({userData, activePage}) {
    return (
        <Navbar style={{backgroundColor:"#39367d"}} variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand><img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Team Mössen logo" />
                     Mössen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto"> {/* my-2 my-lg-0 style={{ maxHeight: '100px' }} navbarScroll */}
                        <span className="nav-link" style={{cursor: "pointer"}} onClick={() => activePage("user")}>Dashboard</span>
                        {/* {(userData.role == "ProjectManager" || userData.role == "Boss") && <>
                            <NavLink className="nav-link" to="/pmpage1">PM page 1</NavLink>
                            </>
                        } */}
                        {userData.role == "Boss" &&
                            <span className="nav-link" style={{cursor: "pointer"}} onClick={() => activePage("boss")}>Summed Hours</span>
                            //<NavLink className="nav-link" to="/boss">Boss page</NavLink>
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
