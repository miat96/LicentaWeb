import * as React from "react";
import { Route, withRouter } from 'react-router-dom';
import { Login } from "./Login";
import {Principal} from './Principal';
import {Register} from './Register';
import {Application} from "./Application";
import {LoginService} from "../Services/LoginService"
import {Location} from "../Components/Location"
import {Timer} from "../Components/Timer"
import {FindPassword} from "../Components/FindPassword"
import {ChangePassword} from "../Components/ChangePassword"

export class Router extends React.Component{
    render(){
        return(
            <div className="Router">       
                <Route path="/" exact={true} component={Application}></Route>
                <Route path="/application" exact={true} component={Application}></Route>
                <Route path="/login" exact={true} component={Login}></Route>
                <Route path="/principal" exact={true} component={Principal}></Route>
                <Route path="/register" exact={true} component={Register}></Route>
                <Route path="/location" exact={true} component={Location}></Route>
                <Route path="/timer" exact={true} component={Timer}></Route>
                <Route path="/findPassword" exact={true} component={FindPassword}></Route>
                <Route path="/changePassword" exact={true} component={ChangePassword}></Route>
            </div>
        );

    }
}