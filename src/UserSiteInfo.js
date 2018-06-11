import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import SitePanel from './SitePanel.js'
import { NavLink, withRouter } from 'react-router-dom'
import './UserContent.css'

const UserSiteInfo = (props) => {
    return (
    	<div className="UserSiteInfo-wrapper">
        <div className="ui inverted menu huge teal overflowX-navbar"> 

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
        	
    		<Segment className="SitePanel-wrapper">
    			<SitePanel userId={props.userId} siteId={props.match.params.siteId} />
    		</Segment>
		  </div>
    )
}

export default withRouter(UserSiteInfo)
