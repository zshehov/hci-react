import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import MainContent from './MainContent.js'
import './MainPanel.css'

const MainPanel = (props) => (
	<Grid celled className="MainPanel-wrapper">
		<Grid.Row className="MainPanel-content">
			<Grid.Column stretched widescreen={4} computer={4} only="computer">
				<SideMenu style={{height:'100%'}}/>
			</Grid.Column>


			<Grid.Column stretched widescreen={12} computer={12} mobile={16} >
				<MainContent color="teal"/>
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export default MainPanel