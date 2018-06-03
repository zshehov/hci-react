import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import UserSiteInfo from './UserSiteInfo.js'
import './UserContent.css'
import { makeRequest } from './ValidateForm.js'
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
		makeRequest("asd","get_sites").then((response) => {

			let temp = response.map(item => (JSON.parse(item)));
			this.setState({sideMenuItems : temp});
			alert();
		})
					
	}
	
		

	render(props) {
		console.log("Make request for the sites of user: " + this.props.match.params.userId);


		return (

			<Grid celled className="UserContent-grid">
				<Grid.Row className="UserContent-wrapper" stretched>
					<Grid.Column widescreen={4} computer={4} only="computer">
							<SideMenu sideMenuItems={this.state.sideMenuItems} />
					</Grid.Column>
					
					
					<Grid.Column widescreen={12} computer={12} mobile={16} >
					<Switch>
						<Route path={`${this.props.match.url}/:siteId`} render={ WithParametersRouteComponent(UserSiteInfo, {'userId' : this.props.match.params.userId}) } />
						{ // just a pattern to only load items when they are ready to be loaded
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