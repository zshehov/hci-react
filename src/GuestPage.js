import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'
import HeaderPart from './HeaderPart'
import Plans from './Plans.js'

class GuestPage extends Component{

	render(){
		return (
			<Container className="UserHomePage-contentWrapper">
				<Container textAlign='justified' content={<HeaderPart authenticate={this.props.authenticate}/>}/>
				<Container content={<Plans authenticate={this.props.authenticate}/>}/>
			</Container>	

			);
	}
}

export default GuestPage;