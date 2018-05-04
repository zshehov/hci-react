import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class SideMenu extends Component {

  handleItemClick = (e, { name } )=> {
    this.props.handleSideMenuClick(name);
    // this should call a callback injected by the parent that will make a server <query></query>
  }

  render() {    

    return (
      <Menu className='sideMenu' vertical fluid>

         <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>

        <div className="overflowY-wrapper">
        
            { this.props.sideMenuItems.map((item) => 
                <Menu.Item key={item.name} name={item.name} active={this.props.activeItem === item.name} onClick={this.handleItemClick}>
                    {item.name}
              </Menu.Item>

            )}

        </div>
      </Menu>
    )
  }
}
