import React, { Component } from 'react';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';
import './SegmentColors.css'
import UserContent from './UserContent.js'
import { withRouter } from 'react-router-dom'
import HeaderPart from './HeaderPart'
import { makePostRequest } from './ServerRequests.js'

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

		makePostRequest({"userName": this.props.match.params.userId}, 'initial_access').then(
			(response) => {
				if(response['success'] == 'gg'){
					//console.log("Verified");
				 	this.setState({accessAllowed : true, requestDone : true});
				} else {
					this.setState({accessAllowed : false, errorMessage : response['error'], requestDone : true});
					sessionStorage.clear();this.props.history.replace("/")
				}

			}).catch(err => {
				console.log(err); console.log('IT SH*TTED ITSELF IN UserHomePage');
				sessionStorage.clear();this.props.history.replace("/")
			})
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
