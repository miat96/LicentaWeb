import * as React from "react";
import { Route, withRouter } from 'react-router-dom';
import { Login } from "./Login";
import {Principal} from './Principal';

export class Router extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" exact={true} component={Login}></Route>
                <Route path="/login" exact={true} component={Login}></Route>
                <Route path="/principal" exact={true} component={Principal}></Route>
            </div>
        );

    }
}