import React from 'react';
import { Button, Icon, Container, Label, Header,Segment } from 'semantic-ui-react';

function HeadPart(props){
	return(
		<div>
		
			<Container textAlign='left'>
				<Button className="MainPage-homeButton" floated="left" color="teal" size="huge" >
					<Icon name="home" color="white" size="large" fitted></Icon>
				</Button>		
			</Container>

			<Container textAlign='right'>	
				<Button className="MainPage-homeButton" floated="right" color="teal" size="huge" >
					<Icon name="home" size="large" fitted></Icon>
				</Button>
			</Container>

			<Container textAlign='center'>
				<Header as="h1" size="large" textAlign="center">
					My Content
				</Header>
			</Container>

		</div>
		);
}
 
export default HeadPart