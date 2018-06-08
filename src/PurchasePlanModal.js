import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUpForm from './SignUpForm.js'
import LoginForm from './LoginForm.js'
import './UserHomePage.css'
import {makePostRequest} from './ValidateForm.js'



class PurchasePlanModal extends React.Component{
	constructor(props){
		super(props);
		this.state={
			errorMessage : null
		}
	}


	selectPlan = (props) =>{
	var reqPayload = { "userName" :  sessionStorage.getItem('userName') , "plan" : this.props.chosenPlan };
	makePostRequest(reqPayload,'purchase_plan').then(
		(response) => {
			if(response['error']){
				this.setState({errorMessage: response['error']});
			}else if (response['success']){
				this.props.closeModal();	
				if(this.props.closeChangePlan){
					this.props.closeChangePlan();	
				}
				
			}
		}
		)
}

render() {

	if( this.state.errorMessage!=null ){
		return(
			<div class="ui error message">
				<i class="close icon"></i>
				<div class="header">Error</div>
				<ul class="list">
					<li>{this.state.errorMessage}</li>
				</ul>
			</div>
			);
	}

	else if(sessionStorage.getItem('userName') !== null){
		return (
			<Modal dimmer="blurring" size="small" open={this.props.openState} onClose={this.props.closeModal}>

				<Modal.Header>Get a plan</Modal.Header>
					<Modal.Content>
					
						<Modal.Description>
							<h4>Are you sure you want to set your plan to <u>{`${this.props.chosenPlan}`}</u>?</h4>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button size="huge" color='green' onClick={this.selectPlan}>Yes</Button>
						<Button size="huge" color='red' onClick={this.props.closeModal}>No</Button>
					</Modal.Actions>
			</Modal>
		);
	} else {

		return (
			<Modal dimmer="blurring" size="small" open={this.props.openState} onClose={this.props.closeModal}>

				<Modal.Header>Get a plan</Modal.Header>
					<Modal.Content>
					
						<Modal.Description>
							<h4>To get a plan you must first log into your account. If you don't have one you can always register.</h4>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						
						<SignUpForm/>
						<LoginForm fromGuest="true" authenticate={this.props.authenticate}/>
						<Button size="huge" color='grey' onClick={this.props.closeModal}>Close</Button>
					</Modal.Actions>
			</Modal>
		);
}


};

}



export default PurchasePlanModal;
