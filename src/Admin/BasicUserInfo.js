import React from 'react'
import { Item, List, Divider, Header, Segment, Radio, Modal, Button } from 'semantic-ui-react'
import { makeGetRequest , makePostRequest } from '../ValidateForm'


class BasicUserInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			plan : null,
			created : null,
			expires : null,
			accountState : null,
			open : false

		}
	}

	componentDidMount(){
		var queryString ='userId=' + this.props.match.params.adminId + '&userListId=' + this.props.match.params.userListId;
		try{
			makeGetRequest(queryString,'get_basic_user_info').then(
			(response) => {
				//alert(response.status);
				if(response['error']){
					this.setState({ errorMessage : response['error']});
					//alert("Verified");
				 	this.setState({accessAllowed : false, requestDone : true});
				}
				else{
					if(response['info']){
						console.log(response['info']);
					}
					this.setState({ requestDone: true, accessAllowed: true, plan : response['plan'], created : response['created'],
					 expires : response ['expires'] , accountState : (response['accountState'] === 'enabled') });
				}
			}).catch(err => {
				alert(err); alert('IT SH*TTED ITSELF IN BASIC USER INFO'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}
	}

	handleRadioClick = (event) => {
		this.setState({ nextStateInText : this.state.accountState ? 'disabled' : 'enabled'});
		this.show();
	}

	closeModal = () => {
		this.setState({ open: false });
	}

	show = () => {
		this.setState({open: true});
	}

	changeAccountState = (newState) => {
		try {
			makePostRequest( { userName : this.props.match.params.userListId, newState : newState }, "change_account_state").then(
				response => {
				
						this.setState({ accountState : response['accountState'] === "enabled"});
						this.closeModal();
					
					
				}).catch(err => {
					alert("first catch" + err);
				});
		} catch(err) {
			alert("second catch");
		}
	}

	render(){		
		return (
			<Item.Group divided>
			<Item>
		    		<Item.Image size='small' src='https://s-media-cache-ak0.pinimg.com/originals/82/88/7a/82887a32c14a2829aed10fb82905b80a.jpg' />
		    		
				<Item.Content verticalAlign='middle'>
					<Segment basic floated='right'>
						<Radio toggle floated='right' label='Account Enabled' checked={this.state.accountState} onClick={this.handleRadioClick}/>
					</Segment>
			        <List bulleted size='huge'>
						<Header size='large'>{this.props.match.params.userListId}</Header>
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

			   	</Item.Content>
			</Item>

			<Modal open={this.state.open} onClose={this.closeModal}>
					<Modal.Header>Change state</Modal.Header>
					<Modal.Content image>
						<Modal.Description>
							<Header>Are you sure you want to <u>{this.state.nextStateInText}</u> &nbsp;{this.props.match.params.userListId}'s account '?</Header>					
						</Modal.Description>
					</Modal.Content>

					<Modal.Actions>
						<Button color='red'	onClick={this.closeModal}>
						No
						</Button>
						<Button color='green' onClick={this.changeAccountState.bind(this, this.state.nextStateInText)}>
						Yes
						</Button>
					</Modal.Actions>
				</Modal>
			</Item.Group>

			);
	}
}

export default BasicUserInfo;