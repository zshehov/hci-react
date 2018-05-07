import React from 'react';
import { Button, Icon, Header, Grid, Dropdown } from 'semantic-ui-react';

function HeadPart(props){

	const options = [
		{ key: 1, text: 'Profile', value: 1 },
		{ key: 2, text: 'Plans', value: 2 },
		{ key: 3, text: 'Settings', value: 3 },
	]

	return(

		<Grid className="HeadPart-content" padded='vertically' verticalAlign='middle' columns={15} centered container>
			<Grid.Column width={3}>	
				<Button className="MainPage-homeButton" floated='left' color="teal" size="huge" >
					<Icon name="home" size="large" fitted></Icon>
				</Button>		
			</Grid.Column >
			<Grid.Column width={9}>
				<Header as="h1"  textAlign="center">
					Professional web hosting ツ
				</Header>				
			</Grid.Column>
			<Grid.Column width={3}>
				<Button.Group color='teal' floated="right" size='huge'>

					// probably should be made controlled for the parent (UserHomePage), to load the corresponding page - Profile, Plans, Settings
					<Dropdown text={props.userName} options={options}  button floating />
				</Button.Group>
			</Grid.Column>
		</Grid>
		);
}
 
export default HeadPart