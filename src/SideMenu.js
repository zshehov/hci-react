import React, { Component } from 'react'
import { Input, Loader, Dimmer } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

class SideMenu extends Component {

  render() {    
    return (
      <div className='ui vertical menu'>

        <div className="item">
          <Input icon='search' placeholder='Search sites...' />
        </div>

        <div className="overflowY-wrapper">
            { // show sidemenu only when loaded
              this.props.sideMenuItems ? (
                      this.props.sideMenuItems.map(item =>    
                      <NavLink className="item" to={`${this.props.match.url}/${item.name}`} key={item.name}>
                          {item.name}
                      </NavLink> )) : ( <Dimmer blurring="true" inverted active >
                <Loader size='huge' inline > Loading</Loader>
              </Dimmer>)


            }

        </div>


      </div>
    )
  }
}
export default withRouter(SideMenu)