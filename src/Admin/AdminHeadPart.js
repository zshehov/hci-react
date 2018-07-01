import React from 'react'
import { Menu, Grid, Dropdown, MenuItem, Container, Button, Icon, Segment } from 'semantic-ui-react'
import { NavLink, withRouter, Route, Switch } from 'react-router-dom';
import Users from './UsersPreview'
import BanAccount from './BanAccount'
import AddAdminAccount from './AddAdminAccount'
import GlobalBlackList from './GlobalBlackList'


class AdminHeadPart extends React.Component{

	constructor(props){
		super(props);
	}
	

	render(){
		return (
			<div>
				<Grid padded='vertically' verticalAlign='middle' columns={15} centered container  stackable >
					<Menu size='huge' fluid  color='teal' inverted tabular>
						<Menu.Item as={NavLink} to={this.props.match.url + '/users'} component='Users' >Users</Menu.Item>
						<Menu.Item as={NavLink} to={this.props.match.url + '/blacklist'} component='GlobalBlackList'  >GlobalBlackList</Menu.Item>
						<Menu.Item as={NavLink} to={this.props.match.url + '/addAcc'} component='AddAdminAccount' >Add Admin Account</Menu.Item>
						<Menu.Menu position='right'>
							<Dropdown  item position='right' text={sessionStorage.getItem('userName')} >
								<Dropdown.Menu>
									<MenuItem as={NavLink} to={"/logout"}>Logout</MenuItem>
								</Dropdown.Menu>
							</Dropdown>
						</Menu.Menu>
					</Menu>
				</Grid>

			
				
			</div>
			);
	}

}

export default withRouter(AdminHeadPart);