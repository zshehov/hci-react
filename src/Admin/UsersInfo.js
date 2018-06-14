import React from 'react'	
import { Menu, Segment} from 'semantic-ui-react'
import { withRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom'
import BasicUserInfo from './BasicUserInfo'
import UserWebsites from './UserWebsites'

const UsersInfo = (props) => {
	console.log('Pass these down to the correct panel: ' + props.userId + '/' + props.siteId + '/');

	return (
		<div>
		
			<Menu inverted size='huge'  color='teal'  tabular>
				<Menu.Item  as={NavLink} to={`${props.match.url}/basicInfo`} >Basic information</Menu.Item>
				<Menu.Item as={NavLink} to={`${props.match.url}/websites`} >WebSites</Menu.Item>
			</Menu>
		
		
		
			<Switch>
				<Route path={`${props.match.path}/basicInfo`} component={BasicUserInfo} />
				<Route path={`${props.match.path}/websites`} component={UserWebsites} />
				<Redirect to={`${props.match.url}/basicInfo`} />
			</Switch>
		
		</div>
	);

}

export default  withRouter(UsersInfo);