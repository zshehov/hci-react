import React, {Component} from 'react'
import { Card, Image, Icon, Grid, Container, Form, Button, Popup, List, Header, Divider, Segment, Input } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"
import HeaderPart from './HeaderPart'
import './UserContent.css'
import './SegmentColors.css'

function ProfileSettings(props){
	return (
		<Container>
			<Segment className="greySegment" size="mini" textAlign='justified' content={<HeaderPart/>}></Segment>
			<Segment className="greySegment">
				<Grid columns={2} divided className='UserContent-grid' >
					<Grid.Row className='UserContent-wrapper'>
						<Grid.Column width={4}>
							<Card>
								<Image size='small' centered src='https://s-media-cache-ak0.pinimg.com/originals/82/88/7a/82887a32c14a2829aed10fb82905b80a.jpg'/>
						    	<Card.Content>
						      		<Card.Header>Daniel</Card.Header>
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
					  						<Button type='submit' color='teal' floated='right'  padded="true">Confirm</Button>
					  					</Form>
					  				</Segment>
					  				<Header  color='red'>asfddghgh</Header>
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
													Some very cool plan :)
												</List.Item>
												<Divider hidden/>
												<List.Item>
													<List.Header>Issue date</List.Header>
													12.12.2017
												</List.Item>
												<Divider hidden/>
												<List.Item>
													<List.Header>Expiration date</List.Header>
													12.12.2020
												</List.Item>
												<Divider hidden/>
											</List>
										</Card.Content>
										<Card.Content>
											<Segment floated='right' basic >
												<NavLink floated='right' to='#'>Change current plan <Icon padded size='large' name='edit'/></NavLink>
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

export default ProfileSettings;