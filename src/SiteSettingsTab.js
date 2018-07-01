import React from 'react'
import { Icon, Button, List, Header, Grid, Form, Divider, Modal, Radio, Segment } from 'semantic-ui-react'
import { makeGetRequest, makePostRequest } from './ServerRequests.js'
import { withRouter } from 'react-router-dom'

class SiteSettingsTab extends React.Component{

	state = { open: false, radioState : null, nextStateInText : null , siteDeletion : false}

	closeModal = () => {
		this.setState({ open: false });
	}

	show = () => {
		this.setState({open: true});
	}

	handleDeleteClick = () => {
		this.setState({nextStateInText : 'deleted'});
		this.show();
	}

	handleRadioClick = (state) => {
		this.setState({ nextStateInText : this.state.radioState ? 'frozen' : 'running'});
		this.show();
	}

	componentDidMount() {
		var queryString ='userId=' + sessionStorage.getItem('userName') + '&siteId=' + this.props.siteName;
		try{
			makeGetRequest(queryString,'get_site_state').then(
			(response) => {
				try{
					this.setState({radioState : response === 'running'});
				} catch(err) {
					// we are here if jsonResponse sucks for some reason
					this.setState({radioState : false});
				}
			}).catch(err => {
				console.log(err); console.log('IT SH*TTED ITSELF IN SiteSettingsTab'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}

	}

	closeDeletionModal = () =>{
		this.setState({ siteDeletion : false });
		this.props.history.replace('/home/user');
	}

	changeState(newState) {
		try {
			makePostRequest( { userName : sessionStorage.getItem('userName'), siteUrl : this.props.siteName, newState : newState }, "change_site_state").then(
				response => {
					if (response['success_deleted']){
						this.props.removeSite(response['success_deleted']);
						this.setState({ siteDeletion : true });
					} else {
						this.setState({radioState : response['state'] === "running"});
						this.closeModal();
					}
					
				}).catch(err => {
					console.log("first catch" + err);
				});
		} catch(err) {
			console.log("second catch");
		}
	}

	render(props) {
		const { value } = this.state
		console.log('asdasdasdasd' + this.props.siteName)
		return (

			<Grid relaxed padded reversed='mobile'>
				<Grid.Row>
					<Grid.Column computer={8} mobile={16}>
						<Header size='huge'>{this.props.siteName}</Header>
						<Divider/>
						<Header as='h2'>Status:</Header>

						<Radio toggle floated='right' label={this.state.radioState ? 'running' : 'frozen' } checked={this.state.radioState} onClick={this.handleRadioClick}/>

						<Divider/>
						<Button icon labelPosition='left' color='red' fluid onClick={this.handleDeleteClick}>
							<Icon name='x' />
							Delete site
						</Button>
					</Grid.Column>

					<Grid.Column computer={8} mobile={16}>
						<List size='huge'>
							<Header as='h1'>Site information</Header>
							<Divider/>
							<List.Item>
								<List.Header>Created:</List.Header>
								08.08.2017
							</List.Item>
							<List.Item>
								<List.Header>Size on host:</List.Header>
								128 MB
							</List.Item>
							<Divider hidden/>

						</List>
					</Grid.Column>
			
				</Grid.Row>

				<Modal open={this.state.open} onClose={this.closeModal}>
					<Modal.Header>Change state</Modal.Header>
					<Modal.Content image>
						<Modal.Description>
							<Header>Are you sure you want to set the state of '{this.props.siteName}' to <u>{this.state.nextStateInText}</u>?</Header>
						
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

    			<Modal open={this.state.siteDeletion}>
    				<Modal.Content>
	    				<Segment basic padded='very' textAlign='center' size='huge' color='teal' >
	    					<Header >
	    						Site "{this.props.siteName}" deletion successful.
	    						<i className="green check icon "></i>
	    					</Header>
	    					<Button type='button' floated='right' onClick={this.closeDeletionModal}  color="teal" size="huge" padded="true">Ok</Button>
	    				</Segment>
	    			</Modal.Content>
    			</Modal>
			</Grid>
		)
	}
}

export default withRouter(SiteSettingsTab);


