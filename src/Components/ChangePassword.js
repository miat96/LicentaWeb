import * as React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../CSS/Login.css";
import { NotificationManager } from 'react-notifications';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../CSS/CustomNavbar.css";
import {FindPasswordService} from "../Services/FindPasswordService.js"
import {ChangePasswordService} from "../Services/ChangePasswordService.js"

export class ChangePassword extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          username: FindPasswordService.getId(),
          password1: '',
          password2: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        ChangePasswordService.change(this.state.username, this.state.password1).then(response => response.json())
        .then(responseJson =>{
        console.log(responseJson.token);
        if(responseJson.success){
          FindPasswordService.removeId();
          this.props.history.push("/login");
        }
        else{
          NotificationManager.error('Incorect');
        }
      
      }, (error) => {
        NotificationManager.error('Invalid mail');
      })
    }

    render(){
        return (
            <div className="ChangePassword">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="password1">
                    <FormLabel>Noua parola</FormLabel>
                    <FormControl
                        autoFocus
                        type="password"
                        onChange={(event) => {
                        this.setState({password1 : event.target.value})
                        }}
                    />
                    </FormGroup>
                    <FormGroup controlId="password2">
                    <FormLabel>Confirma parola</FormLabel>
                    <FormControl
                        type="password"
                        onChange={(event) => {
                        this.setState({password2 : event.target.value})
                        }}
                    />
                    </FormGroup>
                    <Button
                    block
                    //disabled={!this.validateForm()}
                    type="submit"
                    >
                    Schimba parola
                    </Button>
                </form>
            </div>
        )
    }

}