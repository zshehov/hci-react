import React from 'react'
import { Item, Radio, Icon, List, Button, Modal	} from 'semantic-ui-react'
import DirectoryList from './DirectoryList.js'
import { postFilePromise, makeGetRequest, getReqNOJSON } from './ServerRequests.js';
import './UserContent.css'



class SiteFilesTab extends React.Component {
	state = { successModalOpen: false, failModalOpen: false, fileList: []}

	handleSuccessOpen = () => this.setState({ successModalOpen: true })
	handleSuccessClose = () => this.setState({ successModalOpen: false })

	handleFailOpen = () => this.setState({ failModalOpen: true })
	handleFailClose = () => this.setState({ failModalOpen: false })

	handleUpload = (event) => {

		console.log(event.target.files[0]);
		const formData = new FormData()
		formData.append('file',	event.target.files[0])
		formData.append('userName', sessionStorage.getItem('userName'))
		formData.append('siteUrl', this.props.siteUrl)

		postFilePromise(formData, 'upload_file').then(jsonResponse => {
			console.log(jsonResponse);
			if(jsonResponse['error'] !== undefined){
				this.handleFailOpen();
			}else{
				this.handleSuccessOpen();
				this.getFilesForSite();
			}
		})
		.catch(error => console.error(error))

	}


	getFilesForSite = () => {
		var queryString ='userName=' + sessionStorage.getItem('userName') + "&siteUrl=" + this.props.siteUrl;
		try{
			makeGetRequest(queryString,'get_files_for_site').then(
			(response) => {
				try{
					let temp = response.map(item => (JSON.parse(item)));
					this.setState({fileList : temp});
				} catch(err) {
					// we are here if jsonResponse is not an array and .map fails
					this.setState({fileList : []});
				}

			}).catch(err => {
				console.log(err); console.log('IT SH*TTED ITSELF IN SiteFilesTab'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}
	}

	componentDidMount(){
		this.getFilesForSite();
	}

	render(props) {

		return (

			<List size='huge' className='overflowY-SitePanel-wrapper'>
			<input name="asdasd" type="file" onChange={this.handleUpload} />

				<DirectoryList fileList={this.state.fileList} dirName="root"/>

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