import * as React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../CSS/Register.css";
import {RegisterService} from "../Services/RegisterService";
import { NotificationManager } from 'react-notifications';

export class Register extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
          token: '',
        }
    }

    handleSubmit = event => {
      event.preventDefault();
      RegisterService.register(this.state.username, this.state.password, this.state.token).then(response => response.json())
      .then(responseJson =>{
        console.log(responseJson.success);
        if(responseJson.success){
          NotificationManager.success(responseJson.success);
          this.props.history.push("/login");
        }
        else{
          NotificationManager.error(responseJson.error);
        }
      
      }, (error) => {
        NotificationManager.error('Invalid username or password');
      })
    }

    render(){
        return (
            <div className="Register">
              <h3 className="register-title">Register</h3>
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username">
                  <FormLabel>Username</FormLabel>
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
                <FormGroup controlId="token">
                  <FormLabel>Token</FormLabel>
                  <FormControl
                    type="text"
                    onChange={(event) => {
                      this.setState({token : event.target.value})
                    }}
                  />
                </FormGroup>
                <Button
                  block
                  //disabled={!this.validateForm()}
                  type="submit">
                  Register
                </Button>
              </form>
            </div>
        );
    }
}
