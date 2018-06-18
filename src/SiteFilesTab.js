import React from 'react'
import { Item, Radio, Icon, List, Button, Modal	} from 'semantic-ui-react'
import DirectoryList from './DirectoryList.js'
import { makePostFileRequest } from './ValidateForm.js';
import './UserContent.css'


var fileList = [
	
	{dir : true, name : 'first dir', data : 
		[ {dir : false, name : 'asd'}, {dir : false, name : 'wtf'}, { dir : true, name : 'nested dir', data : [ {dir : false, name : 'first'}, {dir : false, name : 'second'} ] } ]	},
	{dir : false, name : 'cecko'},
	{dir : false, name : 'petko'},
	{dir : true, name : 'second dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'third dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fourth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fifth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'second dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'third dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fourth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]},
	{dir : true, name : 'fifth dir', data :
		[ {dir: false, name : 'petko'}, {dir : false, name : 'mitkov'} ]}

];

class SiteFilesTab extends React.Component {
		state = { successModalOpen: false, failModalOpen: false}

	handleSuccessOpen = () => this.setState({ successModalOpen: true })
	handleSuccessClose = () => this.setState({ successModalOpen: false })

	handleFailOpen = () => this.setState({ failModalOpen: true })
	handleFailClose = () => this.setState({ failModalOpen: false })

	handleUpload = (event) => {

		console.log(event.target.files[0]);


		const formData = new FormData()

	
		formData.append('file',	event.target.files[0])
		formData.append('userName', sessionStorage.getItem('userName'))


		return fetch('http://localhost:80/web/exercise/upload_file.php', {
			method: 'POST',
			headers: {
					'Authorization': sessionStorage.getItem('jwt')
		}, // 'GET', 'PUT', 'DELETE', etc.
			body: formData	// Coordinate the body type with 'Content-Type'
		})
		.then(response =>  
			response.json())

		.then(jsonResponse => {
			if(jsonResponse['error'] !== undefined){
				this.handleFailOpen();
			}else{
				this.handleSuccessOpen();
			}
		})
		.catch(error => console.error(error))

	}

	render(props) {

		return (

			<List size='huge' className='overflowY-SitePanel-wrapper'>
			<input name="asdasd" type="file" onChange={this.handleUpload} />

				<DirectoryList fileList={fileList} dirName="root"/>

				<Modal
				open={this.state.successModalOpen}
				onClose={this.handleSuccessClose}
				basic
				size='mini'>
					<Modal.Content>
						<h3>Your .zip has been uploaded</h3>
					</Modal.Content>
					<Modal.Actions>
						<Button color='green' onClick={this.handleSuccessClose} inverted>
							<Icon name='checkmark' /> Got it
						</Button>
					</Modal.Actions>
				</Modal>

				<Modal
				open={this.state.failModalOpen}
				onClose={this.handleFailClose}
				basic
				size='mini'>
					<Modal.Content>
						<h3>Your .zip has NOT been uploaded :/</h3>
					</Modal.Content>
					<Modal.Actions>
						<Button color='green' onClick={this.handleFailClose} inverted>
							<Icon name='checkmark' /> Got it
						</Button>
					</Modal.Actions>
				</Modal>



			</List>

		)


	}


}

export default SiteFilesTab;