import React, {Component} from 'react'
import { Route } from "react-router-dom";
import LoginForm from './LoginForm.js';




class ProtectedRoute extends Component{
	constructor(props){
		super(props);
	}

	render(){
		//alert(sessionStorage.getItem('jwt'));
		if(!this.props.allowAccess && sessionStorage.getItem('jwt')==null){
			//alert("access not allowed");

			return (<Route path={this.props.path} render={()=>
				(<LoginForm authenticate={this.props.authenticate} show={true} />)
			} />);
		}
		else{
			
			return (<Route path={this.props.path} component={this.props.component}/>);
		}
	}
}






export default ProtectedRoute;