import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'


class SideMenu extends Component {

  render() {    
    return (
      <div className='ui vertical menu sideMenu'>

        <div className="item">
          <Input icon='search' placeholder='Search sites...' />
        </div>

        <div className="overflowY-wrapper">
            { this.props.sideMenuItems.map((item) =>    
                <NavLink className="item" to={`${this.props.match.url}/${item.name}`} key={item.name}>
                    {item.name}
                </NavLink>
            )}

        </div>
      </div>
    )
  }
}
export default withRouter(SideMenu)