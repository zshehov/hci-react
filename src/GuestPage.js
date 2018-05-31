import React, {Component} from 'react'
import { Grid, Header, Button, Icon } from 'semantic-ui-react'
import LoginForm from './LoginForm.js'
import UserHomePage from './UserHomePage';
import HeaderPart from './HeaderPart'

class GuestPage extends Component{

	render(){
		return (
			<div>
			<HeaderPart authenticate={this.props.authenticate}/>
			</div>
		

			);
	}
}

export default GuestPage;