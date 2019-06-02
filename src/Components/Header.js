import * as React from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
//import "../CSS/CustomNavbar.css";

const LoginComponent = props => <Link to="/login" className="loginLink"><NavItem>Login</NavItem></Link>
const RegisterComponent = props => <Link to="/register" className="registerLink"><NavItem>Creare cont</NavItem></Link>

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Header">
                <Navbar collapseOnSelect>
                    <Navbar.Brand>
                        <Link to="/" className="title">Where is my phone?</Link>
                    </Navbar.Brand>
                    
                    {/* <Navbar.Toggle /> */}
                    <Navbar.Collapse>
                        <Nav>
                            { this.props.location.pathname.slice(1) != "login" ? <LoginComponent /> : null }
                            { this.props.location.pathname.slice(1) != "register" ? <RegisterComponent /> : null }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

}

export default withRouter(Header);