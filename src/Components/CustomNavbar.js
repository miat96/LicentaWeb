import * as React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../CSS/CustomNavbar.css";
//import { LinkContainer } from "react-router-bootstrap";

export default class CustomNavbar extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar collapseOnSelect>
                        <Navbar.Brand>
                            <Link to="/">Where is my phone?</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Link to="/login">
                                <NavItem>Login</NavItem>
                            </Link>
                            <Link to="/register">
                                <NavItem>Creare cont</NavItem>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}