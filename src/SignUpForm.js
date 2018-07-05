import React, { Component } from 'react'
import { Form, Button, Grid, Input, Segment, Modal, Header } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import { makePostRequest } from './ServerRequests.js'
//import { verify } from './verifyForm.js'


class SignUpForm extends Component {

	constructor(props){
		super(props);
		this.state={user:'',
					password:'',
					repeatPassword: '',
					error:'',
					showSignUp: false,
					isRegistered: false
		};

	}

	verify = (event) => {
		var user = this.state.user;
		var password = this.state.password;
		var verifyPass= this.state.repeatPassword;

		if(!this.verifyUser(user)){

			return false;
		}

		if(!this.verifyPassword(password)){
			
			return false;
		}

		if(verifyPass!=password){
			
			this.setState({ error : "*Passwords don't match" });
			return false;

		}else{
			
			return true;

		}
		
	}

    verifyUser = (user) => {
   
		var response = false;
		if(user.match("^([A-Za-z0-9]|\_){3,10}$")){
			response = true;
		}else if(user.length<3){

			this.setState({ error : '*User name too short' });

		}else if(user.length>10){

			this.setState({ error : '*User name too long' });

		}else if(user.match('[^A-Za-z0-9_]')){

			this.setState({ error : '*User name can contain only alphanumeric symbols and _' });

		}
		
		return response;

	}

	verifyPassword = (password) => {

		var response = false;
		if(password.length<6 ){
			response = false;
			this.setState({ error : '*Password too short' });

		}
		else if( password.search("[A-Z]+")<0 || password.search("[a-z]+")<0 || password.search("[0-9]+")<0){

			this.setState({ error : '*Password too weak. Must contain upperCase letter and number.' });
		}
		else{
			response = true;
		}
		
		return response;
	}

	componentDidMount(){
		if(this.props.show){
			this.setState({showSignUp:true});
		}
	}

	registerUser = (event) => {
		if(this.state.error) this.setState({error:''});

		if( this.verify() == true ){
			makePostRequest(this.state, 'signUp').then(
				(response) => {
					console.log(response['error'])
					if(response['error']){
						console.log('in error');
						this.setState({ error : "*" + response['error'] });
					}else{
						this.setState({isRegistered : true});
					}
				},
				(error) => {
					console.log(error);
				});
		}
		else{
			return;
		} 

	}

	updateValue = (event) => {
		this.setState({
			[event.target.name] : event.target.value
		});
	}

	showSignUp = () => {
		this.setState({showSignUp:true});
	}

	closeSignUp = () => {
		this.setState({showSignUp:false});
		this.props.history.replace('/');
	}

  render() {
  
   
    	if (!this.state.isRegistered){
    		return (
    			<Modal trigger={<Button name='showSignUp' onClick={this.showSignUp} className="MainPage-homeButton"  color="teal" size="huge" floated='right' content='Sign Up' />} open={this.state.showSignUp || this.props.showModal} >
	    			<Modal.Header>Register</Modal.Header>
			 		<Modal.Content>
						<Grid centered padded='vertically'>
							<Grid.Row padded="true" columns={1} >
								<Grid.Column width={8}>
									<Segment color='teal' padded='very' size='massive' attached>
			    						<Form onSubmit={this.registerUser}>
					    					<Form.Field>
					      						<Input name="user" type="text" placeholder='User' value={this.state.user} onChange={this.updateValue}/>
					    					</Form.Field>
					    					<Form.Field>
					        					<Input name="password" type="password" placeholder='Password' value={this.state.password} onChange={this.updateValue} />
					    					</Form.Field>
					    					<Form.Field>
					        					<Input name="repeatPassword" type="password" placeholder='Confirm password' value={this.state.repeatPassword} onChange={this.updateValue} />
					    					</Form.Field>
					  						<Button type='button' floated='right' onClick={this.closeSignUp} padded="true">Cancel</Button>
					  						<Button type='submit' color='teal' floated='right'  padded="true">Submit</Button>
					  					</Form>
					  				</Segment>
					  				<Header  value={this.state.error} attached ='bottom' onChange={this.updateValue} color='red' content={this.state.error}></Header>
					  			</Grid.Column>
					  		</Grid.Row>
					  	</Grid>
					</Modal.Content>
				</Modal>
    			);
    	}else{
    		return(
    			<Modal open={this.state.showSignUp}>
    				<Modal.Content>
	    				<Segment basic padded='very' textAlign='center' size='big' color='teal' >
	    					<Header>
	    						Sing Up successful! :) 
	    						<i className="green check icon padded"></i>
	    					</Header>
	    					<Button type='button' floated='right' onClick={this.closeSignUp}  color="teal" size="huge" padded="true">Ok</Button>
	    				</Segment>
	    			</Modal.Content>
    			</Modal>
    		);
    	}
  }


	

}

export default withRouter(SignUpForm);
