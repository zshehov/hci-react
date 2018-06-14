import React from 'react'
import { Accordion, Icon, List, Dimmer, Loader } from 'semantic-ui-react' 
import { makeGetRequest } from '../ValidateForm'
import WebSites from './UserWebsiteInfo'

class UserWebsites extends React.Component {
	constructor(props){
		super(props);
		this.state={
			activeIndex :0,
			sitesList : null
		}
	}

	componentDidMount(){
		let queryString = 'userId=' + this.props.match.params.userListId+'&adminId=' + this.props.match.params.adminId;
		try{
			makeGetRequest(queryString,'get_sites').then(
			(response) => {
				//alert(response.status);
				if(response['error']){
					this.setState({ errorMessage : response['error']});
					//alert("Verified");
					alert(response);
				 	this.setState({accessAllowed : false, requestDone : true});
				}
				else{
					if(response['info']){
						console.log(response['info']);
					}
					let temp = response.map(item => (JSON.parse(item)));
					this.setState({sitesList : temp});
				}
			}).catch(err => {
				this.setState({sitesList : []});
				alert(err); alert('IT SH*TTED ITSELF IN PROFILEз'); sessionStorage.clear();this.props.history.replace("/");
			});
		}catch (err){
			//exception logic
		}

	}

	handleClick = (e, titleProps) => {
	    const { index } = titleProps
	    const { activeIndex } = this.state
	    const newIndex = activeIndex === index ? -1 : index

	    this.setState({ activeIndex: newIndex })
	}



	render(){
		let siteCount = 0;
		return (
			<Accordion styled  fluid style={{'max-height' : '70vh', 'overflow-y' : 'auto'}}>
				 {
                this.state.sitesList ? (

                        this.state.sitesList.map(site =>    
                        	<div >
                        	<Accordion.Title active={this.state.activeIndex === siteCount} index={siteCount} onClick={this.handleClick} style={{'color':'teal'}}>
					          <Icon name='dropdown' />
					          {site.name}
					        </Accordion.Title>
					        <Accordion.Content active={this.state.activeIndex === siteCount++}>
					          <WebSites/>
					        </Accordion.Content>
					        </div>
                         )
                        
                        ) : ( <Dimmer blurring="true" inverted active >
                  <Loader size='huge' inline > Loading</Loader>
                </Dimmer>)

              }
		        

		        
		    </Accordion>
		   
		    
			)
	}
}

export default UserWebsites