import * as React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../CSS/Login.css";
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import {LoginService} from '../Services/LoginService.js';
import { NotificationManager } from 'react-notifications';
import FormData from 'form-data';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          //loginModel: {
            username: '',
            password: ''
          //}   
        }
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
    
    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      // LoginService.login(this.state.username, this.state.password).then((response) => {
      //  // let responseJson = response;

      //   //LoginService.setData(this.state.loginModel.response.token);
      //   NotificationManager.success('You are now logged in');
      //   this.props.history.push("/principal");
      // }, (error) => {
      //   NotificationManager.error('Invalid username or password');
      // })
      let formData = new FormData();
      formData.append('username', 'admin');
      formData.append('password', 'admin')

      let data = {
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        // },
        body: formData,
      }
      fetch("http://localhost/licenta/login.php", data)
      .then((response) => {
        response.json();
      })
      .then((responseJson) => {
        NotificationManager.error('Corect');
      })
      .catch((error) => {
          console.error(error);
      });



    }

    render(){
        return (
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username">
                  <FormLabel>Username</FormLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    onChange={(event) => {
                      // let loginModel = this.state.loginModel;
                      // loginModel.username = event.target.value;
                      // this.setState({ loginModel: loginModel })
                      this.setState({username : event.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    onChange={(event) => {
                      // let loginModel = this.state.loginModel;
                      // loginModel.password = event.target.value;
                      // this.setState({ loginModel: loginModel })
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
            </div>
          );
    }

}