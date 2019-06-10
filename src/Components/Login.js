import * as React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../CSS/Login.css";
import {LoginService} from '../Services/LoginService.js';
import { NotificationManager } from 'react-notifications';
import {NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
        }
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }
    
    handleSubmit = event => {
      event.preventDefault();
      LoginService.login(this.state.username, this.state.password).then(response => response.json())
      .then(responseJson =>{
        console.log(responseJson.token);
        if(responseJson.token){
          NotificationManager.success(responseJson.token);
          LoginService.setData(responseJson.token);
          this.props.history.push("/principal");
        }
        else{
          NotificationManager.error('Incorect');
        }
      
      }, (error) => {
        NotificationManager.error('Invalid username or password');
      })
    }

    render(){
        return (
            <div className="Login">
              <h3 className="login-title">Login</h3>
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    onChange={(event) => {
                      this.setState({username : event.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    onChange={(event) => {
                      this.setState({password : event.target.value})
                    }}
                  />
                </FormGroup>
                <Button
                  block
                  //disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
                </Button>
              </form>
              <div>
                {/* <a href="/findPassword" className="stretched-link" role="button">Ai uitat parola?</a> */}
                <Link to="/findPassword">
                    <NavItem>Forgot password?</NavItem>
                </Link>
              </div>    
            </div>
        );
    }

}