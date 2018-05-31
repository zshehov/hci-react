import React from "react"
import { Grid, Header, Button, Icon } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import HeadPart from './HeadPart'

const HeaderPart = (props) => {
	if(sessionStorage.getItem("accountType")==null){
		return (
			<Grid className="HeadPart-content" padded='vertically' verticalAlign='middle' columns={15} centered container>
				<Grid.Column width={9}>
					<Header as="h1"  textAlign="left">
						My Content
					</Header>				
				</Grid.Column>
				<Grid.Column width={6}>	
					<Button name='showSignUp' floated='right' color="teal" size="huge" content='Sign-up'/>
					<div>
						<LoginForm authenticate={props.authenticate}/>
					</div>
				</Grid.Column >
			</Grid>
			);
	}else if(sessionStorage.getItem("accountType")=='user'){
		//alert("we have user" + " user is : " + props.userName);
		return(<HeadPart userName={sessionStorage.getItem('userName')} />);

		
	}else if(sessionStorage.getItem("accountType")=='admin'){
		return null;
	}else{
		return null;
}
	}
	

export default HeaderPart