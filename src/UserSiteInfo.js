import React from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import SitePanel from './SitePanel.js'

class UserSiteInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = { activeItem : '' }
	}
	

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    console.log(this.props.chosenSite);
    return (
    	<div>
      <Menu size='huge' color='teal' inverted>
        <Menu.Item
          name='Statistics'
          active={activeItem === 'Statistics'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Files'
          active={activeItem === 'Files'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Apps'
          active={activeItem === 'Apps'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Blacklist'
          active={activeItem === 'Blacklist'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Settings'
          active={activeItem === 'Settings'}
          onClick={this.handleItemClick}> Settings &nbsp;<Icon name="setting" /> </Menu.Item>
      </Menu>
      	
		<Segment>
			<SitePanel userName='ceco' chosenTab={activeItem} chosenSite={this.props.chosenSite} />
		</Segment>
		</div>
	
    )
  }
}

export default UserSiteInfo