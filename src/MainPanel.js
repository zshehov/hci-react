import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import MainContent from './MainContent.js'

const MainPanel = (props) => (
	<Grid celled>
		<Grid.Column widescreen={4} computer={4} only="computer">
			<SideMenu />
		</Grid.Column>


		<Grid.Column widescreen={12} computer={12} mobile={16}>
			<MainContent color="teal"/>
		</Grid.Column>
	</Grid>
)

export default MainPanel