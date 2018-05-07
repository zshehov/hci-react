import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import UserSiteInfo from './UserSiteInfo.js'
import './UserContent.css'

const sideMenuItems = [
	{name : 'inbox'},
	{name : '11'},
	{name : '22'},
	{name : '33'},
	{name : '44'},
	{name : '55'},
	{name : '66'},
	{name : '771'},
	{name : '773'},
	{name : '774'},
	{name : '775'},
	{name : '7776'},
	{name : '778'},
	{name : '772'},
	{name : '7723'},
	{name : '7447'},
	{name : '717'},
	{name : '7237'},
	{name : '7721'},
	{name : '737'},
	{name : '7117'},
	{name : '757'},
	{name : '7755'},
	{name : '773455'},
	{name : '77wee55'},
	{name : '77e55'},


];

export default class UserContent extends React.Component{
	constructor(props){
		super(props);
		this.state = { sideMenuSelection: '', navbarSelection: '' }
		
		this.handleSideMenuClick = this.handleSideMenuClick.bind(this);
	}

	handleSideMenuClick(selection) {
	
		this.setState({sideMenuSelection: selection});
		// probably make a server query here
	}

	render(props){		
		return (
			<Grid celled className="UserContent-grid">
			<Grid.Row className="UserContent-wrapper" stretched>
				<Grid.Column widescreen={4} computer={4} only="computer">
					<SideMenu handleSideMenuClick={this.handleSideMenuClick} sideMenuItems={sideMenuItems} activeItem={this.state.sideMenuSelection} />
				</Grid.Column>


				<Grid.Column widescreen={12} computer={12} mobile={16} >
					<UserSiteInfo chosenSite={this.state.sideMenuSelection}/>
				</Grid.Column>
			</Grid.Row>
	</Grid>
		);
	}
}
