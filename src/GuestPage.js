import React, {Component} from 'react'
import HeaderPart from './HeaderPart'

class GuestPage extends Component{

	render(){
		return (
			<div>
			<HeaderPart authenticate={this.props.authenticate}/>
			</div>
		

			);
	}
}

export default GuestPage;