import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile';
import Upload from './Upload';

class Users extends Component{
    constructor(){
        super()
        this.state={
            user:'',
            isLoggedIn: false
        }
    }

    toggleLogin = () =>{
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    setUser = (data) =>{
        this.setState({
            user: data.id
        })
    }

    renderProfile = () =>{
        return(
            <Profile isLoggedIn={this.isLoggedIn} setUser={this.setUser} user={this.state.user} />
        )
    }

    renderUpload = () =>{
        return(
            <Upload/>
        )
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/users/profile" render={this.renderProfile} />
                    <Route exact path="/users/upload" render={this.renderUpload} />
                </Switch>
            </div>
        )
    }
}

export default Users;