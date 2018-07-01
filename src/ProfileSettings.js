import React, {Component} from 'react'
import { Card, Image, Icon, Grid, Container, Form, Button, Popup, List, Header, Divider, Segment, Input, Dimmer, Loader, Modal } from 'semantic-ui-react'
import { NavLink, withRouter } from "react-router-dom"
import HeaderPart from './HeaderPart'
import './UserContent.css'
import './SegmentColors.css'
import Plans from './Plans'
import { makeGetRequest } from './ServerRequests.js'


class ProfileSettings extends Component{
	constructor(props){
		super(props);
		this.state={
			changePlan : false,
			accessAllowed : false,
			requestDone : false,
			errorMessage: null,
			plan : '',
			created :'',
			expires : ''
		}
	}

	componentDidMount(){
		var queryString ='userId=' + this.props.match.params.userId;
		try{
			makeGetRequest(queryString,'get_profile_settings').then(
			(response) => {
				//console.log(response.status);
				if(response['error']){
					this.setState({ errorMessage : response['error']});
					//console.log("Verified");
				 	this.setState({accessAllowed : false, requestDone : true});
				}
				else{
					if(response['info']){
						console.log(response['info']);
					}
					this.setState({ requestDone: true, accessAllowed: true, plan : response['plan'], created : response['created'], expires : response ['expires']});
				}
			}).catch(err => {
				sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}
	}

	showChangePlan = (props) =>{
		this.setState({ changePlan : true});
	}

	closeChangePlan = (props) =>{
		this.setState({ changePlan : false});
	}

	render(){
		if( !this.state.requestDone ){
			 return(
			 	<Container >
			 		<Segment padded="very" textAlign="center" style={{"height" : "100vh"}}>
				      <Dimmer active >
				        <Loader size='huge' inline > Loading</Loader>
				      </Dimmer>
				    </Segment>
			 	</Container>
			 		);
		}else if( this.state.requestDone && this.state.accessAllowed ){
			return (
		<Container>
			<Segment className="greySegment" size="mini"  content={<HeaderPart/>}></Segment>
			<Segment className="greySegment">
				<Grid columns={2} divided className='UserContent-grid' >
					<Grid.Row className='UserContent-wrapper'>
						<Grid.Column width={4}>
							<Card>
								<Image size='small' centered src='https://s-media-cache-ak0.pinimg.com/originals/82/88/7a/82887a32c14a2829aed10fb82905b80a.jpg'/>
						    	<Card.Content>
						      		<Card.Header>{sessionStorage.getItem('userName')}</Card.Header>
						      		<Card.Meta>Joined in 2016</Card.Meta>
						      		<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
						    	</Card.Content>
						    	<Card.Content extra>
						      		<a>
						        		<Icon name='user' />
						        		10 Friends
						      		</a>
						    	</Card.Content>
							</Card>
							<Popup position='bottom left'  on='click'   trigger={<NavLink to='#'>Change password?</NavLink>}>
								<Segment color='teal' size='huge'  basic >
			    						<Form  >
					    					<Form.Field>
					      						<Input type="password" placeholder='Old password' />
					    					</Form.Field>
					    					<Form.Field>
					        					<Input type="password" placeholder='New password' />
					    					</Form.Field>
					    					<Form.Field>
					        					<Input type="password" placeholder='Confirm new password' />
					    					</Form.Field>
					  						<Button type='submit' color='teal' floated='right'>Confirm</Button>
					  					</Form>
					  				</Segment>
					  				<Header  color='red'></Header>
							  </Popup>
						</Grid.Column>
						<Grid.Column width={12}>
							<Grid.Row columns={1}>
								<Grid.Column >
									<Card fluid centered>
										<Card.Content>
											<List bulleted size='huge'>
												<Header size='large'>Profile information</Header>
												<Divider/>
												<List.Item>
													<List.Header>Current Plan</List.Header>
													{this.state.plan}
												</List.Item>
												<Divider hidden/>
												<List.Item>
													<List.Header>Issue date</List.Header>
													{this.state.created}
												</List.Item>
												<Divider hidden/>
												<List.Item>
													<List.Header>Expiration date</List.Header>
													{this.state.expires}
												</List.Item>
												<Divider hidden/>
											</List>
										</Card.Content>
										<Card.Content>
											<Segment floated='right' basic >
												<Modal trigger={<NavLink as='Button' floated='right' onClick={this.showChangePlan} to='#'>Change current plan <Icon  size='large' name='edit'/></NavLink>} open={this.state.changePlan} closeIcon={<Icon name='close' onClick={this.closeChangePlan}/>}>
													<Modal.Content>
														<Plans userId={sessionStorage.getItem('userName')} hidden={true} closeChangePlan={this.closeChangePlan}/>
													</Modal.Content>
												</Modal>
											</Segment>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Container>
		);

		}
		

	}
	
}

export default withRouter(ProfileSettings);