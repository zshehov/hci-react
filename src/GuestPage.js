import React, {Component} from 'react'
import { Grid, Header, Button, Icon } from 'semantic-ui-react'
import LoginForm from './LoginForm.js'
import UserHomePage from './UserHomePage';

class GuestPage extends Component{

	render(){
		return (

			<Grid className="HeadPart-content" padded='vertically' verticalAlign='middle' columns={15} centered container>
				<Grid.Column width={9}>
					<Header as="h1"  textAlign="left">
						My Content
					</Header>				
				</Grid.Column>
				<Grid.Column width={6}>	
					<Button name='showSignUp' floated='right' color="teal" size="huge" content='Sign-up'/>
						<div>
							<LoginForm authenticate={this.props.authenticate}/>
						</div>
				</Grid.Column >
			</Grid>

			);
	}
}

export default GuestPage;