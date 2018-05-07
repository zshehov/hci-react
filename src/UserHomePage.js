import React from 'react';
import { Container } from 'semantic-ui-react';
import './UserHomePage.css'
import HeadPart from './HeadPart.js'
import UserContent from './UserContent.js'

function UserHomePage(props){
	return(
		<Container className="UserHomePage-contentWrapper">
			<Container textAlign='justified' content={<HeadPart  userName='cecko'/>}/>
			<Container className="UserHomePage-bodyCont" content={<UserContent />}/>
		</Container>		

	);
}


export default UserHomePage