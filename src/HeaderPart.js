import React from "react"
import { Grid, Header } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import HeadPart from './HeadPart'

const HeaderPart = (props) => {
	if(sessionStorage.getItem("accountType")==null){
		return (
			<Grid padded='vertically' verticalAlign='middle' columns={15} centered container stackable>
				<Grid.Column computer={8} tablet={7} >
					<Header as="h1"  textAlign="left">
						Professional web hosting ツ
					</Header>				
				</Grid.Column>
				<Grid.Column computer={7} tablet={8}>	
					<div>
						<SignUpForm authenticate={props.authenticate}/>
						<LoginForm authenticate={props.authenticate}/>
					</div>
				</Grid.Column >
			</Grid>
			);
	}else if(sessionStorage.getItem("accountType") === 'user'){
		//alert("we have user" + " user is : " + props.userName);
		return(<HeadPart userName={sessionStorage.getItem('userName')} />);

		
	}else if(sessionStorage.getItem("accountType") === 'admin'){
		return null;
	}else{
		return null;
}
	}
	

export default HeaderPart