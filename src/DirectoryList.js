import React from 'react'
import { Item, Radio, Icon, List} from 'semantic-ui-react'




class DirectoryList extends React.Component {


	toggleHide = () => {this.setState({hidden : !this.state.hidden})}
	
	componentWillMount() {
		this.setState ({ hidden : false})
	}
	
	render(props) {
		return (
			<List.Item>
			<List.Icon name='folder' color='yellow' />
				<List.Content>
					<List.Header as='a' onClick={this.toggleHide}>Directory</List.Header>
					{ this.state.hidden === false &&
						(<List.List>
							{
							this.props.fileList.map(entry => 
								entry.dir === true ?
									<DirectoryList fileList={entry.data}/> : 

									<List.Item>
										<List.Icon name='file' color='grey'/>
										<List.Content>
											<List.Header>{entry.name}</List.Header>
										</List.Content>
									</List.Item>
							)} 
						</List.List>)


					}
					</List.Content>
			
			</List.Item>

		)
	}


}

export default DirectoryList;