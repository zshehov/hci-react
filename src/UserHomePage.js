import React, { Component } from 'react';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';
import './SegmentColors.css'
import UserContent from './UserContent.js'
import { withRouter } from 'react-router-dom'
import HeaderPart from './HeaderPart'

class UserHomePage extends Component{

	constructor(props){
		super(props);
		this.state={
			accessAllowed : false,
			errorMessage : null,
			requestDone :false,
		}
	}

	componentDidMount(){

		var token = sessionStorage.getItem('jwt');
		//alert(this.state.accessAllowed+ "  "+this.state.errorMessage  + "  " + this.state.requestDone);
		let URL = 'http://localhost:80/web/exercise/AccessAllowed.php';
		fetch(URL, {
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization' :  token
			},
			body: JSON.stringify({"userId": this.props.match.params.userId})
		}).then(
		(response) => {
			//alert(response.status);
			if(response.status === 200){
				//alert("Verified");
			 	this.setState({accessAllowed : true, requestDone : true});
			}
			else{
				this.setState({accessAllowed : false, errorMessage : response.status + "\n" + response.statusText, requestDone : true});
			}
		});
	}
	
	render(){
		if( !this.state.requestDone){
			 return(
			 	<Container >
			 		<Segment padded="very" textAlign="center" style={{"height" : "100vh"}}>
				      <Dimmer active >
				        <Loader size='huge' inline > Loading</Loader>
				      </Dimmer>
				    </Segment>
			 	</Container>
			 		);
		}
		else if(this.state.requestDone && this.state.accessAllowed){
			return(
					<Container >
						<Segment size="mini" className="greySegment" textAlign='justified' content={<HeaderPart authenticate={this.props.authenticate}/>}/>
						<Segment className="greySegment" content={<UserContent />}/>
					</Container>		
			);
		}
		else if( this.state.requestDone && !this.state.accessAllowed){
			return (
				<div class="ui error message">
					<i class="close icon"></i>
					<div class="header">Error</div>
					<ul class="list">
						<li>{this.state.errorMessage}</li>
					</ul>
				</div>
			);
		}
	}
}


export default withRouter(UserHomePage)
