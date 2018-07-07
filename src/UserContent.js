import React from 'react'
import { Grid, Accordion, Icon, Divider } from 'semantic-ui-react'
import SideMenu from './SideMenu.js'
import UserSiteInfo from './UserSiteInfo.js'
import './UserContent.css'
import { WithParametersRouteComponent } from './WithParametersRouteComponent.js'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { makeGetRequest } from './ServerRequests.js'

class UserContent extends React.Component{

	state = {activeIndex : 0}
	constructor(props) {
		super(props);
		this.state = {
			sideMenuItems : null,
			activeIndex : 0,
		}
	}

	componentDidMount() {
		var queryString = 'userName=' + this.props.match.params.userId;
		try{
			makeGetRequest(queryString,'get_sites').then(
			(response) => {
				try{
					let temp = response.map(item => (JSON.parse(item)));
					this.setState({sideMenuItems : temp});
				} catch(err) {
					// we are here if jsonResponse is not an array and .map fails
					this.setState({sideMenuItems : []});
				}

			}).catch(err => {
				console.log(err); console.log('IT SH*TTED ITSELF IN UserContent'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}
	}

	removeSite = (site) => {
		
		let newSideMenu = this.state.sideMenuItems;

		var index = -1;
		for (var i = 0; i < newSideMenu.length; i++) {
			if (newSideMenu[i].name === site){
				index = i;
				break;
			}
		}
		if (index !== -1) newSideMenu.splice(index, 1);
		this.setState({sideMenuItems : newSideMenu});
	}

	appendSite = (newSite) => {
		console.log(newSite);
		// SHOULD HAVE A CHECK FOR REPEATING
		this.setState(prevState => ( {sideMenuItems : [...prevState.sideMenuItems , {'name' : newSite, 'site' : newSite}]} ));
	}

	handleClick = (e, titleProps) => {
		const { index } = titleProps
		const { activeIndex } = this.state
		const newIndex = activeIndex === index ? -1 : index

		this.setState({ activeIndex: newIndex })
	}
	render(props) {
		return (

			<Grid className="UserContent-grid">
				<Grid.Row divided stretched>
					<Grid.Column mobile={16} only="tablet mobile" >
										
	
						<Accordion>
							<Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
								<Icon name='dropdown' />
								Websites
							</Accordion.Title>
							<Accordion.Content active={this.state.activeIndex === 0} content={<SideMenu sideMenuItems={this.state.sideMenuItems} appendSite={this.appendSite}/>} />

						</Accordion>
						<Divider/>
					</Grid.Column>

					<Grid.Column widescreen={4} computer={4} only="computer" >
										
						<SideMenu sideMenuItems={this.state.sideMenuItems} appendSite={this.appendSite}/>

					</Grid.Column>
					
					
					<Grid.Column widescreen={12} computer={12} mobile={16} >
					<Switch>
						<Route path={`${this.props.match.url}/:siteId`} render={ WithParametersRouteComponent(UserSiteInfo,
						 {'userId' : this.props.match.params.userId , 'removeSite' : this.removeSite })} />
						{ // only load items when they are ready to be loaded. there could be 0 sites for a user
						this.state.sideMenuItems && this.state.sideMenuItems.length !== 0 &&
								<Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/${this.state.sideMenuItems[0].name}`} />
						}

					</Switch>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);

	}

		

}

export default withRouter(UserContent)