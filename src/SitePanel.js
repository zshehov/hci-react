import React from 'react'	
import Blacklist from './SiteBlacklistTab.js'
import SiteStatistics from './SiteStatisticsTab.js'
import SiteAppsTab from './SiteAppsTab.js'
import SiteFilesTab from './SiteFilesTab.js'
import SiteSettingsTab from './SiteSettingsTab.js'
import { withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { WithParametersRouteComponent } from './WithParametersRouteComponent.js'
import './UserContent.css'




const SitePanel = (props) => {
	console.log('Pass these down to the correct panel: ' + props.userId + '/' + props.siteId + '/');


	return (

	<Switch>
		<Route path={`${props.match.url}/statistics`} render={props => ( <SiteStatistics/>)} />
		<Route path={`${props.match.url}/files`} render={WithParametersRouteComponent(SiteFilesTab, {siteUrl : props.siteId})} />
		<Route path={`${props.match.url}/apps`} render={props => ( <SiteAppsTab/>)} />
		<Route path={`${props.match.url}/blacklist`} render={props => ( <Blacklist/>)} />
		<Route path={`${props.match.url}/settings`} render={WithParametersRouteComponent(SiteSettingsTab, {siteName : props.siteId , removeSite : props.removeSite})} />
		<Redirect from={`${props.match.url}`} exact to={`${props.match.url}/statistics`} />
	</Switch>
	)

}

export default  withRouter(SitePanel);