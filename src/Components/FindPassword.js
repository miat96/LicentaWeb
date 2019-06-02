import * as React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../CSS/Login.css";
import {FindPasswordService} from '../Services/FindPasswordService.js';
import { NotificationManager } from 'react-notifications';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../CSS/CustomNavbar.css";


export class FindPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        FindPasswordService.sendMail(this.state.username).then(response =>{
            FindPasswordService.setData(this.state.username);
            this.props.history.push("/application");
      
        }, (error) => {
            NotificationManager.error('Invalid email');
            this.props.history.push("/application");
        })
    }

    render(){
        return (
            <div className="FindPassword">
                <h3>Introduceti adresa de email folosita la crearea contului:</h3>
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
                <Button
                  block
                  type="submit"
                >
                  Recuperare cont
                </Button>
                </form>

            </div>
        )
    }

}