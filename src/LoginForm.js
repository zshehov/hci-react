import React, { Component } from 'react'
import { Form, Container,Button, Grid,Input, Segment, Card, Modal,Image,Header, Message } from 'semantic-ui-react'
import {validateData} from './ValidateForm.js'
import {Redirect} from 'react-router-dom';
import MainPage from './MainPage.js';


class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state={user:'',
					passwd:'',
					error:'',
					redirect: 'false',
					homePage:''};
		this.updateValue=this.updateValue.bind(this);
		this.validateUser=this.validateUser.bind(this);
	}

	validateUser(event){
		if(this.state.error) this.setState({error:''});
			validateData(this.state).then(
				(response) => {
					if(response['error']){
						this.setState({error : "*"+response['error']});
					}else{
						console.log('Success, redirecting to home page');
						//this.setState({ redirect:'true' , homePage:'userHomePage' });
					}
			},
				(error) => {
					this.setState({redirect:'true'});
				});
	

	}

	updateValue(event){
		this.setState({
			[event.target.name] : event.target.value
		});
	}
  render() {
  	if (this.state.redirect=='true'){
  		//Should add logic for successful redirecting to user homepage.
  		return (<p>Sorry something went wrong. Try again later!</p>);
  	}
    return (
    	
    	<Modal className="prokletiq" trigger={<Button>Basic Modal</Button>} >
    		<Modal.Header>Login Menu</Modal.Header>
	 		<Modal.Content>
				<Grid centered padded='vertically'>
					<Grid.Row padded columns={1} >
						<Grid.Column width={8}>
							<Segment color='teal' padded='very' size='massive' attached>
	    						<Form onSubmit={this.validateUser}>
			    					<Form.Field>
			      						<Input name="user" type="text" placeholder='User' value={this.state.user} onChange={this.updateValue}/>
			    					</Form.Field>
			    					<Form.Field>
			        					<Input name="passwd" type="password" placeholder='Password' value={this.state.passwd} onChange={this.updateValue} />
			    					</Form.Field>
			  						<Button type='submit' floated='right' padded >Cancel</Button>
			  						<Button type='submit' color='teal' floated='right' padded>Submit</Button>
			  					</Form>
			  				</Segment>
			  				<Header  value={this.state.error} attached ='bottom' onChange={this.updateValue} color='red' content={this.state.error}></Header>
			  			</Grid.Column>
			  		</Grid.Row>
			  	</Grid>
			</Modal.Content>
    	</Modal>
    );
  }
}

export default LoginForm;
