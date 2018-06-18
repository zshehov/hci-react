import React, {Component} from 'react'
import { Route } from "react-router-dom";
import LoginForm from './LoginForm.js';




class ProtectedRoute extends Component{

	render(){
		//console.log(sessionStorage.getItem('jwt'));
		if(!this.props.allowAccess && sessionStorage.getItem('jwt')==null){
			//console.log("access not allowed");

			return (<Route path={this.props.path} render={()=>
				(<LoginForm authenticate={this.props.authenticate} show={true} />)
			} />);
		}
		else{
			
			return (<Route path={this.props.path} render={ (props) => <this.props.component {...props} />  } />);
		}
	}
}






export default ProtectedRoute;