import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import UserHomePage from './UserHomePage';
import GuestPage from './GuestPage';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			user : false,
			admin : false
		}
	}

	authenticate = (person) => {
		alert("user authenticate: "+this.state.user);
		alert("admin authenticate: "+this.state.admin);
		this.setState({[person] : true});
	}

  render() {
    return (
    	<HashRouter>
    		<Switch>
    			<Route path="/" exact render={ (props) => 
    				(<GuestPage authenticate={this.authenticate} />)
  				} />
    			<ProtectedRoute path="/home" exact component={UserHomePage} allowAccess={this.state.user} authenticate={this.authenticate}/>
    			<ProtectedRoute path="/admin" exact component={UserHomePage} allowAccess={this.state.amind} authenticate={this.authenticate} />
    		</Switch>
    	</HashRouter>
    );
  }
}

export default App;
