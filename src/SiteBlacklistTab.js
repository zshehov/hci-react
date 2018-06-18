import React from 'react'
import { List, Button, Input} from 'semantic-ui-react'
import "./SiteBlacklistTab.css"


class Blacklist extends React.Component{

	constructor(props) {
		super(props);

		this.state = {

			bannedIps : [
				"10.192.161.1",
				"168.192.122.2",
				"17.12.12.23",
				"168.192.122.3",
				"17.12.12.24",
				"168.192.122.4",
				"17.12.12.28",
				"168.192.123.2",
				"17.12.12.25",
				"168.192.126.2",
				"17.12.12.20",
				"168.192.120.2",
				"17.12.12.13",
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
    		console.log("Not an ip");
    		return;  
 		}  
 		// need to be validated on server too
		if(this.state.bannedIps.includes(this.state.newIp)){
			console.log("Already present");
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
			<List divided relaxed style={{'max-height' : '83vh'}} className="wrapper" size="massive">
				<List.Item>
					<Input onChange={this.handleChange} value={this.state.newIp} placeholder="IP to ban" size="mini" actionPosition='left' fluid action={ {color : "teal", icon: "plus", onClick: this.handleAdd } }/>
				</List.Item>
				{this.state.bannedIps.map((item) =>
					<List.Item key={item}>
						<List.Content floated='left'>
							<Button color="red" onClick={this.handleRemove.bind(this,item)} icon="x"></Button>
						</List.Content>
						<List.Content>
							{item}
						</List.Content>
					</List.Item>
				)}	

			</List>
			
		)
	}

}
export default Blacklist