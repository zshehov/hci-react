import React, { Component } from 'react';
import { Button, Icon, Header, Grid, Dropdown, MenuItem } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
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
	


	handleClick = (event) =>{
		//this.props.history.push("/home/"+this.event.target);
		var index = event.nativeEvent.target.selectedIndex;
		alert(index);
	}

	render(){
	return(

		<Grid className="HeadPart-content" padded='vertically' verticalAlign='middle' columns={15} centered container>
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

					// probably should be made controlled for the parent (UserHomePage), to load the corresponding page - Profile, Plans, Settings
					<Dropdown text={sessionStorage.getItem('userName')} onChange={this.handleClick} selection button fluid floating >
						<Dropdown.Menu>
							<MenuItem content={<NavLink to={"home/"+sessionStorage.getItem('userName')}>Profile</NavLink>} />
							<MenuItem content={<NavLink to={"home/"+sessionStorage.getItem('userName')}>Plans</NavLink>} />
							<MenuItem content={<NavLink to={"home/"+sessionStorage.getItem('userName')}>Settings</NavLink>} />
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