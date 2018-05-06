import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class SideMenu extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fluid>
         <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
        <div class="SideMenu-menu">
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
        
          Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
        
          Spam
        </Menu.Item>

<Menu.Item name='spamw' active={activeItem === 'spamw'} onClick={this.handleItemClick}>
        
          Spam
        </Menu.Item>
        <Menu.Item name='spamr' active={activeItem === 'spamr'} onClick={this.handleItemClick}>
        
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
        
          Updates
        </Menu.Item>

        <Menu.Item name='spam1' active={activeItem === 'spam1'} onClick={this.handleItemClick}>
        
          Spam
        </Menu.Item>
           <Menu.Item name='spam2' active={activeItem === 'spam2'} onClick={this.handleItemClick}>
        
          Spam
        </Menu.Item>
        </div>
      </Menu>
    )
  }
}
