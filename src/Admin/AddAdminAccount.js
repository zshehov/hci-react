import React, { Component } from 'react'
import { Form, Button, Grid, Input, Segment, Modal, Header, Dropdown } from 'semantic-ui-react'
import { withRouter, Redirect } from "react-router-dom";
import { makePostRequest } from '../ServerRequests.js'


class AddAdminAccount extends Component {

	constructor(props){
		super(props);
		this.state={user:'',
					error:'',
					showSignUp: true,
					isRegistered: false	
		};
	}

	componentDidMount(){
		if(this.props.show){
			this.setState({showSignUp:true});
		}
	}

	generatePassword = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

	registerUser = (event) => {
		if(this.state.error) this.setState({error:''});
		
		let pass = this.generatePassword();
		makePostRequest({ 'user' : this.state.user, 'password' : pass}, 'signUp').then(
			(response) => {
				if(response['error']){
					this.setState({ error : "*" + response['error'] });
				}else{
					this.setState({isRegistered : true, password : pass});
				}
			},
			(error) => {
				console.log(error);
			});		
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
		this.props.history.replace('/admin/'+sessionStorage.getItem('userName'));
	}

  render() {
  
   
    	if (!this.state.isRegistered){
    		return (
    			<Modal  open={this.state.showSignUp} >
	    			<Modal.Header>Register</Modal.Header>
			 		<Modal.Content>
						<Grid centered padded='vertically'>
							<Grid.Row padded="true" columns={1} >
								<Grid.Column width={8}>
									<Segment color='teal' padded='very' size='massive' attached>
			    						<Form onSubmit={this.registerUser}>
					    					<Form.Field>
					      						<Input name="user" type="text" placeholder='Admin Name' value={this.state.user} onChange={this.updateValue}/>
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
    		<div>
    			<Modal open={this.state.showSignUp}>
    				<Modal.Content>
	    				<Segment basic padded='very' textAlign='center' size='big' color='teal' >
	    					<Header>
	    						Sing Up successful! :) 
	    						<i className="green check icon padded"></i>
	    					</Header>
	    					Account password is: {this.state.password}
	    					<Button type='button' floated='right' onClick={this.closeSignUp}  color="teal" size="huge" padded="true">Ok</Button>
	    				</Segment>
	    			</Modal.Content>
    			</Modal>
    		</div>
    		);
    	}
  }
}

export default withRouter(AddAdminAccount);
