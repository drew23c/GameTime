import React, {Component} from 'react';
import './Styles/Nav.css';
import Profile from './Profile'
import axios from 'axios';

class Login extends Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }    

render(){
        return(
            <div>
                <a href="http://localhost:3100/auth/dailymotion">Log in</a>
            </div>
        )       
    }
}
export default Login;