import React from 'react'
import { Item, Radio, Icon, List} from 'semantic-ui-react'




class DirectoryList extends React.Component {


	toggleHide = () => {this.setState({hidden : !this.state.hidden})}
	
	componentWillMount() {
		this.setState ({ hidden : true})
	}
	
	render(props) {
		return (
			<List.Item>
			<List.Icon name='folder' color='yellow' />
				<List.Content>
					<List.Header as={this.props.dirName	!== 'root' ? 'a' : 'div'} onClick={this.toggleHide}>{this.props.dirName}{
						this.props.dirName !== 'root' ? (this.state.hidden ? <Icon name="triangle down"/> : <Icon name="triangle up"/>) : <div/>}</List.Header>
					{ (this.state.hidden === false || this.props.dirName === 'root' )&&
						(<List.List>
							{
							this.props.fileList.map(entry => 
								entry.dir === true ?
									<DirectoryList fileList={entry.data} dirName={entry.name}/> : 

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