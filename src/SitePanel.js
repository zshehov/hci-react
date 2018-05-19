import React from 'react'	
import { withRouter, Route, Switch	} from 'react-router-dom'

const SitePanel = (props) => {
	console.log('Pass these down to the correct panel: ' + props.userId + '/' + props.siteId + '/');


	return (

	<Switch>
		<Route path={`${props.match.url}`} exact render={props => ( <div>Chose action from above</div>)} />
		<Route path={`${props.match.url}/statistics`} render={props => ( <div> stats</div>)} />
		<Route path={`${props.match.url}/files`} render={props => ( <div> files</div>)} />
		<Route path={`${props.match.url}/apps`} render={props => ( <div> apps</div>)} />
		<Route path={`${props.match.url}/blacklist`} render={props => ( <div> blacklist</div>)} />
		<Route path={`${props.match.url}/settings`} render={props => ( <div> settings</div>)} />
	</Switch>

	)

}

export default  withRouter(SitePanel);