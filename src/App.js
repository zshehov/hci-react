import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserHomePage from './UserHomePage';
import GuestPage from './GuestPage';

class App extends Component {
  render() {
    return (
    	<HashRouter>
    		<Switch>
    			<Route path="/" exact component={GuestPage}/>
    			<Route path="/home" exact component={UserHomePage}/>
    			<Route path="/admin" exact component={UserHomePage}/>
    		</Switch>
    	</HashRouter>
    );
  }
}

export default App;
