import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import SitePanel from './SitePanel.js'
import { NavLink, withRouter} from 'react-router-dom'

const UserSiteInfo = (props) => {
    return (
    	<div>
        <div className="ui inverted menu huge teal">

          <NavLink className="item" to={`${props.match.url}/statistics`}>
            Statistics
          </NavLink>

          <NavLink className="item" to={`${props.match.url}/files`}>
            Files
          </NavLink>

          <NavLink className="item" to={`${props.match.url}/apps`}>
            Apps
          </NavLink>

          <NavLink className="item" to={`${props.match.url}/blacklist`}>
            Blacklist
          </NavLink>

          <NavLink className="item" to={`${props.match.url}/settings`}>
            Settings&nbsp;<Icon name="setting" />
          </NavLink>
        </div>
        	
    		<Segment>
    			<SitePanel userId={props.userId} siteId={props.match.params.siteId} />
    		</Segment>
		  </div>
    )
}

export default withRouter(UserSiteInfo)
