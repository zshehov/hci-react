import React from 'react';
import { Button, Icon, Container, Label, Header,Segment, Grid } from 'semantic-ui-react';

function HeadPart(props){
	return(

		<Grid className="HeadPart-content" padded='very' verticalAlign='middle' columns={15} centered container>
			<Grid.Column width={3}>	
				<Button className="MainPage-homeButton" floated='left' color="teal" size="huge" >
					<Icon name="home" color="white" size="large" fitted></Icon>
				</Button>		
			</Grid.Column >
			<Grid.Column width={9}>
				<Header as="h1"  textAlign="center">
					My Content
				</Header>				
			</Grid.Column>
			<Grid.Column width={3}>
				<Button className="MainPage-homeButton"  color="teal" size="huge" floated='right' >
					<Icon name="home" size="large" fitted></Icon>
				</Button>
			</Grid.Column>
		</Grid>
		
		);
}
 
export default HeadPart