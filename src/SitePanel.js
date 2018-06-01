import React from 'react'	
import Blacklist from './SiteBlacklistTab.js'
import { withRouter, Route, Switch, Redirect} from 'react-router-dom'

const SitePanel = (props) => {
	console.log('Pass these down to the correct panel: ' + props.userId + '/' + props.siteId + '/');


	return (
<div>
		<div id="asd"></div>

	<Switch>
		
		<Route path={`${props.match.url}/statistics`} render={props => ( <div> stats</div>)} />
		<Route path={`${props.match.url}/files`} render={props => ( <div> files</div>)} />
		<Route path={`${props.match.url}/apps`} render={props => ( <div> apps</div>)} />
		<Route path={`${props.match.url}/blacklist`} render={props => ( <Blacklist/>)} />
		<Route path={`${props.match.url}/settings`} render={props => ( <div> settings</div>)} />
		<Redirect from={`${props.match.url}`} exact to={`${props.match.url}/statistics`} />
	</Switch>
</div>	
	)

}

export default  withRouter(SitePanel);