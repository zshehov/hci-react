import React from 'react'
import { Tab } from 'semantic-ui-react'
import MainPanel from './MainPanel.js'

 // should put the respective components inside this Tab.Pane-s.
const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane style={{height:'90%'}} loading attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane style={{height:'90%'}} attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane style={{height:'90%'}} attached={false}>Tab 3 Content</Tab.Pane> },
]

const MainContent = () => (
  <Tab  menu={{ attached: true,
               tabular: false,
               color: 'teal',
               inverted: true,
               size: 'huge'}} panes={panes} />
)

export default MainContent