import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import UserSiteInfo from './UserSiteInfo.js'
import './UserContent.css'
import { WithParametersRouteComponent } from './WithParametersRouteComponent.js'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'

class UserContent extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			sideMenuItems : null,
		}
	}



	componentDidMount() {

		var token = sessionStorage.getItem('jwt');
		alert(token);
		//alert(this.state.accessAllowed+ "  "+this.state.errorMessage  + "  " + this.state.requestDone);
		let URL = 'http://localhost:80/web/exercise/get_sites.php?userName=' + this.props.match.params.userId;
		fetch(URL, {
			method: 'GET',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization' :  token,
			},
		}).then(
		(response) => {
			//alert(response.status);
			if(response.status === 200){
				console.log(response);
				//alert("Verified");
			 	alert("ITS OK");
			 	return response.json();
			
			}
			else {
				// if we are here there were no exceptions in get_sites but we returned another status.
				// this case is currently handled beforehand in AccessAllowed.php
				alert("NOT COOL RESPONSE FROM get_sites.php");
			}
		})
		.then(jsonResponse => {
			alert("Response: " + jsonResponse);
			let temp = jsonResponse.map(item => (JSON.parse(item)));
			this.setState({sideMenuItems : temp});

		}).catch(error => {
			// if we are here it means there was exception thrown in get_sites.php -> directly log out 
			alert(error); alert('IT SH*TTED ITSELF'); sessionStorage.clear();this.props.history.replace("/");});
	}

	
		

	render(props) {
		console.log("Make request for the sites of user: " + this.props.match.params.userId);
 		console.log("sites: " + this.state.sideMenuItems);

		return (

			<Grid celled className="UserContent-grid">
				<Grid.Row className="UserContent-wrapper" stretched>
					<Grid.Column widescreen={4} computer={4} only="computer">
							<SideMenu sideMenuItems={this.state.sideMenuItems} />
					</Grid.Column>
					
					
					<Grid.Column widescreen={12} computer={12} mobile={16} >
					<Switch>
						<Route path={`${this.props.match.url}/:siteId`} render={ WithParametersRouteComponent(UserSiteInfo, {'userId' : this.props.match.params.userId}) } />
						{ // only load items when they are ready to be loaded
						this.state.sideMenuItems &&
								<Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/${this.state.sideMenuItems[0].name}`} />
						}

					</Switch>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);

	}

		

}

export default withRouter(UserContent)