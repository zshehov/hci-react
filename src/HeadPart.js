import React, { Component } from 'react';
import { Button, Icon, Header, Grid, Dropdown, MenuItem } from 'semantic-ui-react';
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

		<Grid padded='vertically' verticalAlign='middle' columns={15} centered container>
			<Grid.Column width={3}>	
				<NavLink to="/" exact >
					<Button color="teal" size="huge" icon>
						<Icon  name="home" size="large" ></Icon>
					</Button>
				</NavLink>		
			</Grid.Column >
			<Grid.Column width={9}>
				<Header as="h1"  textAlign="center">
					Professional web hosting ツ
				</Header>				
			</Grid.Column>
			<Grid.Column width={3}>
				<Button.Group color='teal' floated="right" size='huge'>
					<Button  onClick={this.redirectToProfile} >{sessionStorage.getItem('userName')} </Button>
				
				
					<Dropdown  icon='dont'  trigger={<Button icon size='huge'><Icon name='dropdown'/></Button>} >
						<Dropdown.Menu>
							<MenuItem content={<NavLink to={"home/"+sessionStorage.getItem('userName')}>Plans</NavLink>} />
							<MenuItem content={<NavLink to='/profileSettings'>Settings</NavLink>} />
							<MenuItem content={<NavLink to={"/logout"}>Logout</NavLink>} />
						</Dropdown.Menu>
					</Dropdown>
				</Button.Group>
			</Grid.Column>
		</Grid>
	);

	}
	

}
 
export default withRouter(HeadPart)