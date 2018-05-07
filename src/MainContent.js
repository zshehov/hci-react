import React from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import MainPanel from './MainPanel.js'
import SitePanel from './SitePanel.js'

 // should put the respective components inside this Tab.Pane-s.
 /*
const panes = [
  { menuItem: 'Statistics', render: () => <Tab.Pane style={{height:'90%'}} loading attached={false}>Statistics</Tab.Pane> },
  { menuItem: 'Files', render: () => <Tab.Pane style={{height:'90%'}} attached={false}>Files</Tab.Pane> },
  { menuItem: 'Apps', render: () => <Tab.Pane style={{height:'90%'}} attached={false}>Apps</Tab.Pane> },
  { menuItem: 'Blacklist', render: () => <Tab.Pane style={{height:'90%'}} attached={false}>Blacklist</Tab.Pane> },
  { menuItem: 'Settings', render: () => <Tab.Pane style={{height:'90%'}} attached={false}>Settings</Tab.Pane> },
]


const MainContent = () => (
  <Tab  menu={{ attached: true,
               tabular: false,
               color: 'teal',
               inverted: true,
               size: 'huge'}} panes={panes} />
)

export default MainContent





const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane response={lastServerResponse}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
*/

class MainContent extends React.Component {
	state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
			<SitePanel userName='ceckopetkov' chosenTab={activeItem} chosenSite='random.org' />
		</Segment>
		</div>
	
    )
  }
}

export default MainContent