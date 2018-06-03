import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUpForm from './SignUpForm.js'
import LoginForm from './LoginForm.js'

const PurchasePlanModal = (props) => {


if (sessionStorage.getItem('userName') !== null){
	return (
		<Modal dimmer="blurring" size="small" open={props.openState} onClose={props.closeModal}>

			<Modal.Header>Get a plan</Modal.Header>
				<Modal.Content>
				
					<Modal.Description>
						<h4>Are you sure you want to set your plan to <u>{`${props.chosenPlan}`}</u>?</h4>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button size="huge" color='green' onClick={props.closeModal}>Yes</Button>
					<Button size="huge" color='red' onClick={props.closeModal}>No</Button>
				</Modal.Actions>
		</Modal>
	);
} else {

	return (
		<Modal dimmer="blurring" size="small" open={props.openState} onClose={props.closeModal}>

			<Modal.Header>Get a plan</Modal.Header>
				<Modal.Content>
				
					<Modal.Description>
						<h4>To get a plan you must first log into your account. If you don't have one you can always register.</h4>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					
					<SignUpForm/>
					<LoginForm fromGuest="true" authenticate={props.authenticate}/>
					<Button size="huge" color='grey' onClick={props.closeModal}>Close</Button>
				</Modal.Actions>
		</Modal>
	);
}


};


export default PurchasePlanModal;
