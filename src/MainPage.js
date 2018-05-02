import React from 'react';
import { Button, Icon, Container, Label, Header,Segment } from 'semantic-ui-react';
import './MainPage.css'
import HeadPart from './HeadPart.js'

function MainPage(props){
	return(
		<Container className="cont">
			<Container className="MainPage-HeadCont" textAlign='justified' content={<HeadPart/>}>
			</Container>
		</Container>

		);
}


export default MainPage