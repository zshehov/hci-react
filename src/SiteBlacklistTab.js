import React from 'react'
import { List, Button, Input} from 'semantic-ui-react'



class Blacklist extends React.Component{

	constructor(props) {
		super(props);

		this.state = {

			bannedIps : [
				"10.192.161.1",
				"168.192.122.2",
				"17.12.12.23"
			],

			newIp : ''
		}
	}

	handleChange = (event) => {
	 	this.setState({
	 		newIp : event.target.value
	 	})
  }

	handleAdd = () => {
		// need to be validated on server too
		if (! /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.state.newIp)) {  
    		alert("Not an ip");
    		return;  
 		}  
 		// need to be validated on server too
		if(this.state.bannedIps.includes(this.state.newIp)){
			alert("Already present");
			return;
		}
		// call to server
		this.setState(prevState => ({
			bannedIps : [...prevState.bannedIps, this.state.newIp ],
			newIp : ''
		}))
	}

	handleRemove = (target) => {
		// call to server
		let newList = [...this.state.bannedIps];
		let index = newList.indexOf(target);
		newList.splice(index, 1);
		this.setState({bannedIps : newList});

		console.log(target);
	}
	render() {
		return(

	<List divided relaxed size="massive">
		{
		this.state.bannedIps.map((item) =>
			<List.Item key={item}>
			<List.Content floated='right'>
			<Button color="red" onClick={this.handleRemove.bind(this,item)}>Remove</Button>
			</List.Content>
			<List.Content>
				{item}
			</List.Content>
		</List.Item>


		)
	}


	<List.Item>
		<Input onChange={this.handleChange} value={this.state.newIp} placeholder="IP to ban" size="mini" fluid action={ {color : "teal", content : "Add", onClick: this.handleAdd } }/>
	</List.Item>
	

	</List>

		)

	}

}
export default Blacklist