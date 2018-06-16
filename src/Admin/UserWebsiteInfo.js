import React from 'react'
import { Segment, List, Icon, Radio, Modal, Header, Button } from 'semantic-ui-react'
import { makeGetRequest, makePostRequest} from '../ValidateForm'

class WebSites extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			siteState : false,
			open : false,
		}
	}

	componentDidMount(){
		let queryString = 'adminId=' + this.props.match.params.adminId + '&userId=' + this.props.match.params.userListId + '&siteId=' + this.props.siteId;
		try{
			makeGetRequest(queryString,'get_site_state').then(
			(response) => {
				try{
					this.setState({siteState : response === 'running'});
				} catch(err) {
					// we are here if jsonResponse sucks for some reason
					this.setState({siteState : false});
				}
			}).catch(err => {
				alert(err); alert('IT SH*TTED ITSELF IN UserWebSiteInfo'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}

	}

	show = (e) => {
		this.setState({ open : true }); 
	}

	closeModal = (e) => {
		this.setState({ open : false }); 
	}

	handleRadioClick = (event) =>{
		this.setState({ nextStateInText : this.state.siteState ? 'frozen' : 'running'});
		this.show();
	}

	changeState(newState) {
		try {
			makePostRequest( { adminId : this.props.match.params.adminId, userName : this.props.match.params.userListId , siteUrl : this.props.siteId, newState : newState }, "change_site_state").then(
				response => {

						this.setState({siteState : response['state'] === "running"});
						this.closeModal();
					
				}).catch(err => {
					alert("first catch" + err);
				});
		} catch(err) {
			alert("second catch");
		}
	}

	render(){
		return(
			<div>
			<Segment basic>
				<List>
					 <List.Item>
				      <List.Content floated='right'>
				      	<Radio label='Site running' toggle checked={this.state.siteState} onClick={this.handleRadioClick}/>
				      </List.Content>
				    </List.Item>
				    <List.Item>
				      <List.Icon name='folder' size='huge' color='yellow'/>
				      <List.Content as='h2'>Site Size: 60MB</List.Content>
				    </List.Item>
				    <List.Item>
				      <List.Icon name='area graph' size='huge' color='olive'/>
				      <List.Content as='h2'>Monthly Traffic</List.Content>
				    </List.Item>
				    <List.Item >
				      <List.Content floated='right' as='h3'>
				      	 <List.Icon name='mail' size='medium'/>
				        <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
				      </List.Content>
				    </List.Item>
				    <List.Item >
				      <List.Content floated='right' as='h3'>
				      	<List.Icon name='linkify' size='medium' />
				      		Site url:
				        <a href='http://www.semantic-ui.com'>  semantic-ui.com</a>
				      </List.Content>
				   	</List.Item>
				</List>
			</Segment>
			<Modal open={this.state.open} onClose={this.closeModal}>
					<Modal.Header>Change state</Modal.Header>
					<Modal.Content image>
						<Modal.Description>
							<Header>Are you sure you want to set the state of '{this.props.siteId}' to <u>{this.state.nextStateInText}</u>?</Header>		
						</Modal.Description>
					</Modal.Content>

					<Modal.Actions>
						<Button color='red'	onClick={this.closeModal}>
						No
						</Button>
						<Button color='green' onClick={this.changeState.bind(this, this.state.nextStateInText)}>
						Yes
						</Button>
					</Modal.Actions>
				</Modal>

			</div>

		);
	}
	
}

export default WebSites