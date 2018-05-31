import React, { Component } from 'react'
import { Form, Button, Grid, Input, Segment, Modal, Header } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import { validateData } from './ValidateForm.js'


class LoginForm extends Component {

	constructor(props){
		super(props);
		this.state={user:'',
					passwd:'',
					error:'',
					showLogin: false,
		};
	}

	componentDidMount(){
		if(this.props.show){
			this.setState({showLogin:true});
		}
	}

	validateUser = (event) => {
		if(this.state.error) this.setState({error:''});
			validateData(this.state, 'login').then(
				(response) => {
					if(response['error']){
						this.setState({ error : "*" + response['error'] });
					}else{
						this.closeLogin();
						this.props.authenticate('user');
						this.props.authenticate;
						// this can be used everywhere like: sessionStorage.getItem('jwt');
						sessionStorage.setItem("jwt",response['jwt']);
						sessionStorage.setItem("accountType",response['data']['type']);
						sessionStorage.setItem("userName",response['data']['user']);

						this.props.history.push("/home/"+this.state.user);
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

	showLogin = () => {
		this.setState({showLogin:true});
	}

	closeLogin = () => {
		this.setState({showLogin:false});
		this.props.history.replace('/');
	}

  render() {
  
    return (

    	<Modal trigger={<Button name='showLogin' onClick={this.showLogin} className="MainPage-homeButton"  color="teal" size="huge" floated='right' content='Login' />} open={this.state.showLogin} >
    		<Modal.Header>Login Menu</Modal.Header>
	 		<Modal.Content>
				<Grid centered padded='vertically'>
					<Grid.Row padded="true" columns={1} >
						<Grid.Column width={8}>
							<Segment color='teal' padded='very' size='massive' attached>
	    						<Form onSubmit={this.validateUser}>
			    					<Form.Field>
			      						<Input name="user" type="text" placeholder='User' value={this.state.user} onChange={this.updateValue}/>
			    					</Form.Field>
			    					<Form.Field>
			        					<Input name="passwd" type="password" placeholder='Password' value={this.state.passwd} onChange={this.updateValue} />
			    					</Form.Field>
			  						<Button type='button' floated='right' onClick={this.closeLogin} padded="true">Cancel</Button>
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
  }
}

export default withRouter(LoginForm);
