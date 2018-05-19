import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserHomePage from './UserHomePage';
import GuestPage from './GuestPage';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<Switch>
    			<Route path="/" exact component={GuestPage}/>
    			<Route path="/home/:userId" component={UserHomePage}/> // this matching means that the user has logged in successfully
    			<Route path="/admin" component={UserHomePage}/>
    		</Switch>
    	</BrowserRouter>
    );
  }
}

export default App;
