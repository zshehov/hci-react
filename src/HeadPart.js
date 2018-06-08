import React, { Component } from 'react';
import { Button, Icon, Header, Grid, Dropdown, MenuItem, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './HeadPart.css';
import { withRouter } from "react-router-dom";

class HeadPart extends Component{

	constructor(props){
		super(props);
		this.state= {
			options :	[
	
							{ key: 1, text: 'Profile', value: 'home/' + sessionStorage.getItem('userName') },
							{ key: 2, text: 'Plans', value: 2 },
							{ key: 3, text: 'Settings', value: 3 },
							{ key: 4, text: 'Logout', value: 4 },
						]
		}
	}
	


	redirectToProfile = (event) =>{
		this.props.history.push("/home/" + sessionStorage.getItem('userName'));
	}

	render(){
	return(
		<Grid padded='vertically' verticalAlign='middle' columns={15} centered container  stackable reversed>
			<Grid.Column width={3} >	
				<NavLink to={"/"} exact >
					<Button color="teal" size="huge" icon>
						<Icon  name="home" size="large" ></Icon>
					</Button>
				</NavLink>		
			</Grid.Column >
			<Grid.Column computer={8} tablet={7} >
				<Header as="h1"  textAlign="center">
					Professional web hosting ツ
				</Header>				
			</Grid.Column>
			<Grid.Column computer={4}  tablet={5}>
				<Container textAlign='right'>
					<Button  onClick={this.redirectToProfile} attached='left' color='teal'  size='huge'>{sessionStorage.getItem('userName')} </Button>
					<Dropdown  icon='none'  trigger={<Button color='teal'  size='huge' icon attached='right'><Icon name='dropdown'/></Button>} >
						<Dropdown.Menu>
							<MenuItem as={NavLink} to={'/profileSettings/'+sessionStorage.getItem('userName')}>Settings</MenuItem>
							<MenuItem as={NavLink} to={"/logout"}>Logout</MenuItem>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Grid.Column>
		</Grid>
	);

	}
	

}
 
export default withRouter(HeadPart)