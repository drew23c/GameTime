import React, { Component } from 'react';
import logo from './logo.svg';
import './components/Styles/App.css';
import './components/Styles/Nav.css'
import Home from './components/Home';
import Videos from './components/Videos';
import Login from './components/Login';
import Upload from './components/Upload';
import {Link, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav">
          <Link className="Logo" to="/">GameTime</Link>{" "}
          <Link to="/">Home</Link>{" "}
          <Link to="/videos">Videos</Link>{" "}
          <Link to="/users/upload">Upload</Link>
          <Login/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/videos" component={Videos}/>
        <Route path="/users/upload" component={Upload}/>
      </Switch>
        </div>
      </div>
    );
  }
}

export default App;
