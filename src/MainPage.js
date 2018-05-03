import React from 'react';
import { Button, Icon, Container, Label, Header,Segment } from 'semantic-ui-react';
import './MainPage.css'
import HeadPart from './HeadPart.js'
import MainPanel from './MainPanel.js'

function MainPage(props){
	return(
		<Container className="MainPage-contentWrapper">
			<Container className="MainPage-headCont" textAlign='justified' content={<HeadPart/>} />
			<Container className="MainPage-bodyCont" content={<MainPanel />}/>
		</Container>

	);
}


export default MainPage