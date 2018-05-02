import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import MainContent from './MainContent.js'
import ResponsiveWrapper from './ResponsiveWrapper.js'

const MainPanel = (props) => (
	<Grid celled>
	<Grid.Column width={4} only="widescreen">
		<SideMenu />
	</Grid.Column>


	<Grid.Column widescreen={12} mobile={16}>
		<MainContent color="teal"/>
	</Grid.Column>
	</Grid>
)

export default MainPanel