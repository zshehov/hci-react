import React, { Component } from 'react'
import { Form, Container,Button, Grid,Input, Segment, Card, Modal,Image,Header,  } from 'semantic-ui-react'
import './LoginForm.css'



class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state={user:'',passwd:''};
		this.updateValue=this.updateValue.bind(this);
	}

	updateValue(event){
		this.setState({
			[event.target.name] : event.target.value
		});
	}
  render() {
    return (
    	
    	<Modal className="prokletiq" trigger={<Button>Basic Modal</Button>} >
    		<Modal.Header>Login Menu</Modal.Header>
	 		<Modal.Content>
				<Grid centered padded='vertically'>
					<Grid.Row padded columns={1} >
						<Grid.Column width={8}>
							<Segment color='teal' padded='very' size='massive'>
	    						<Form>
			    					<Form.Field>
			      						<Input name="user" type="text" placeholder='User' value={this.state.user} onChange={this.updateValue} />
			    					</Form.Field>
			    					<Form.Field>
			        					<Input name="passwd" type="password" placeholder='Password' value={this.state.passwd} onChange={this.updateValue} />
			    					</Form.Field>
			  						<Button type='submit' floated='right' padded >Cancel</Button>
			  						<Button type='submit' color='teal' floated='right' padded>Submit</Button>
			  					</Form>
			  				</Segment>
			  			</Grid.Column>
			  		</Grid.Row>
			  	</Grid>
			</Modal.Content>
    	</Modal>
    );
  }
}

export default LoginForm;
