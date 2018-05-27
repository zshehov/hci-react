import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import UserSiteInfo from './UserSiteInfo.js'
import './UserContent.css'
import { WithParametersRouteComponent } from './WithParametersRouteComponent.js'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'

const sideMenuItems = [
	{name : 'inbox'},
	{name : '11'},
	{name : '22'},
	{name : '33'},
	{name : '44'},
	{name : '55'},
	{name : '66'},
	{name : '771'},
	{name : '773'},
	{name : '774'},
	{name : '775'},
	{name : '7776'},
	{name : '778'},
	{name : '772'},
	{name : '7723'},
	{name : '7447'},
	{name : '717'},
	{name : '7237'},
	{name : '7721'},
	{name : '737'},
	{name : '7117'},
	{name : '757'},
	{name : '7755'},
	{name : '773455'},
	{name : '77wee55'},
	{name : '77e55'},


];

const UserContent = (props) => {
	
		console.log("Make request for the sites of user: " + props.match.params.userId);

		return (

			<Grid celled className="UserContent-grid">
				<Grid.Row className="UserContent-wrapper" stretched>
					<Grid.Column widescreen={4} computer={4} only="computer">
						<SideMenu sideMenuItems={sideMenuItems} />
					</Grid.Column>
					
					
					<Grid.Column widescreen={12} computer={12} mobile={16} >
					<Switch>
						<Route path={`${props.match.url}/:siteId`} render={ WithParametersRouteComponent(UserSiteInfo, {'userId' : props.match.params.userId}) } />
						<Redirect from={`${props.match.url}`} to={`${props.match.url}/${sideMenuItems[0].name}`} />
					</Switch>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);

}

export default withRouter(UserContent)