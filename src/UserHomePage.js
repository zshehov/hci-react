import React from 'react';
import { Container } from 'semantic-ui-react';
import './UserHomePage.css'
import HeadPart from './HeadPart.js'
import UserContent from './UserContent.js'
import { withRouter } from 'react-router-dom'

function UserHomePage(props){
	console.log(props.match.params.userId);
	return(
		<Container className="UserHomePage-contentWrapper">
			<Container textAlign='justified' content={<HeadPart userName={props.match.params.userId}/>}/>
			<Container className="UserHomePage-bodyCont" content={<UserContent />}/>
		</Container>		

	);
}


export default withRouter(UserHomePage)