import React from 'react';
import { makeGetRequest } from '../ValidateForm';
import {Menu , Grid, Segment, Dimmer, Loader, Header, Input } from 'semantic-ui-react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom"
import UsersInfo from './UsersInfo'
import '../UserContent.css'

class Users extends React.Component {

	constructor(props){
		super(props);
		this.state= {
			usersList : []
		}
	}
	
	componentDidMount(){
		let queryString = 'userId=' + this.props.match.params.adminId;
		try{
			makeGetRequest(queryString,'get_users').then(
			(response) => {
				try{
					let temp = response.map(item => (JSON.parse(item)));
					this.setState({usersList : temp});	
				} catch(err) {
					// we are here if jsonResponse is not an array and .map fails
					this.setState({usersList : []});
					
				}
			}).catch(err => {
				console.log(err); console.log('Failed to load userList'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}
	}

	render(){
		return (
			<Grid className='UserContent-grid'>
				<Grid.Row divided stretched>
					<Grid.Column widescreen={4} computer={4} only="computer" >
						<Menu vertical fluid>
							<Menu.Header as={Segment} basic color='teal' textAlign='center'>Users List</Menu.Header>
							<Menu.Item>
						      <Input className='icon' icon='search' placeholder='Search user...' />
						    </Menu.Item>

							<div className="overflowY-wrapper">
				              {
				                this.state.usersList ? (
				                        this.state.usersList.map(item =>    
				                        <NavLink className="item" to={`${this.props.match.url}/${item.userName}`} key={item.userName}>
				                            {item.userName}
				                        </NavLink> )

				                        ) : ( <Dimmer blurring="true" inverted active >
				                  <Loader size='huge' inline > Loading</Loader>
				                </Dimmer>)

				              }
				          </div>
			         	</Menu>
					</Grid.Column>
						
					<Grid.Column widescreen={12} computer={12} mobile={16} >
						<Switch>
							<Route path={`${this.props.match.path}/:userListId`} component={UsersInfo} />
							{ // only load items when they are ready to be loaded. there could be 0 sites for a user
							this.state.usersList && this.state.usersList.length !== 0 &&
									<Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/${this.state.usersList[0].userName}`} />
							}
						</Switch>
					</Grid.Column>
					
				</Grid.Row>
			</Grid>

			)
	}
}

export default Users