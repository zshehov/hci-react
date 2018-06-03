import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserHomePage from './UserHomePage';
import GuestPage from './GuestPage';
import ProtectedRoute from './ProtectedRoute';
import Logout  from './Logout';
import ProfileSettings from './ProfileSettings'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			user : false,
			admin : false
		}
	}

	authenticate = (person) => {
		this.setState({[person] : true});
	}

  render() {
    return (
    	<BrowserRouter>
    		<Switch>
    			<Route path="/" exact render={ (props) => 
    				(<GuestPage authenticate={this.authenticate} />)
  				} />
    			<ProtectedRoute path="/home/:userId" component={UserHomePage} allowAccess={this.state.user} authenticate={this.authenticate}/>
    			<ProtectedRoute path="/admin"  component={UserHomePage} allowAccess={this.state.admin} authenticate={this.authenticate} />
          <Route path="/logout" exact component={Logout}/>
          <Route path="/profileSettings" exact component={ProfileSettings}/>
    		</Switch>
    	</BrowserRouter>
    );
  }
}

export default App;
