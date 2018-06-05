import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import UserSiteInfo from './UserSiteInfo.js'
import './UserContent.css'
import { WithParametersRouteComponent } from './WithParametersRouteComponent.js'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { makeGetRequest } from './ValidateForm.js'

class UserContent extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			sideMenuItems : null,
		}
	}

	componentDidMount() {

		var queryString ='userId=' + this.props.match.params.userId;
		try{
			makeGetRequest(queryString,'get_sites').then(
			(response) => {
				alert("Response: " + response);
				try{
					let temp = response.map(item => (JSON.parse(item)));
					this.setState({sideMenuItems : temp});
				} catch(err) {
					// we are here if jsonResponse is not an array and .map fails
					this.setState({sideMenuItems : []});
				}
			}).catch(err => {
				alert(err); alert('IT SH*TTED ITSELF IN UserContent'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}
	}

	render(props) {
		console.log("Make request for the sites of user: " + this.props.match.params.userId);
 		console.log("sites: " + this.state.sideMenuItems);

		return (

			<Grid className="UserContent-grid">
				<Grid.Row divided stretched>
					<Grid.Column widescreen={4} computer={4} only="computer" >
						<SideMenu sideMenuItems={this.state.sideMenuItems} />
					</Grid.Column>
					
					
					<Grid.Column widescreen={12} computer={12} mobile={16} >
					<Switch>
						<Route path={`${this.props.match.url}/:siteId`} render={ WithParametersRouteComponent(UserSiteInfo, {'userId' : this.props.match.params.userId}) } />
						{ // only load items when they are ready to be loaded. there could be 0 sites for a user
						this.state.sideMenuItems && this.state.sideMenuItems.length !== 0 &&
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