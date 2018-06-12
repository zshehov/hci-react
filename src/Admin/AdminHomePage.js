import React, { Component } from 'react';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';
import '../SegmentColors.css'
import HeaderPart from '../HeaderPart'
import { NavLink, withRouter, Route , Switch, Redirect } from 'react-router-dom';
import Users from './UsersPreview'
import BanAccount from './BanAccount'
import AddAccount from './AddAccount'
import WebSites from './WebSitesPreview'

class AdminHomePage extends Component{

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
			if(response.status === 200){
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
						<Segment className="greySegment">
							
							<Switch>
								<Route path={`${this.props.match.path}/users`} component={Users}/>
								<Route path={`${this.props.match.path}/websites`} component={WebSites}/>
								<Route path={`${this.props.match.path}/addAcc`} component={AddAccount}/>
								<Route path={`${this.props.match.path}/banAcc`} component={BanAccount}/>
							</Switch>
							<Redirect to={`${this.props.match.url}/users`} /> 
						</Segment>
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


export default withRouter(AdminHomePage)
