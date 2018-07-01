import React from 'react'
import { Accordion, Icon, List, Dimmer, Loader } from 'semantic-ui-react' 
import { makeGetRequest } from '../ServerRequests'
import { NavLink, Redirect, Route } from "react-router-dom";
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
				//console.log(response.status);
				if(response['error']){
					this.setState({ errorMessage : response['error']});
					//console.log("Verified");
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
				console.log(err); console.log('IT SH*TTED ITSELF IN PROFILE'); sessionStorage.clear();this.props.history.replace("/");
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
                        	<NavLink to={`${this.props.match.url}/${site.name}`}>
	                        	<Accordion.Title active={this.state.activeIndex === siteCount} index={siteCount} onClick={this.handleClick} style={{'color':'teal'}}>
						        	<Icon name='dropdown' />
						          	{site.name}
						        </Accordion.Title>
						        <Accordion.Content active={this.state.activeIndex === siteCount++}>
						        	<Route path={`${this.props.match.url}/${site.name}`} exact render={ () => <WebSites {...this.props} siteId={site.name} />} />
						        </Accordion.Content>
					        </NavLink>
                        )):
                          ( <Dimmer blurring="true" inverted active >
                  				<Loader size='huge' inline > Loading</Loader>
                			</Dimmer>)

           		}
	         	{ 
					this.state.sitesList && this.state.sitesList.length !== 0 &&
					 <Redirect to={`${this.props.match.url}/${this.state.sitesList[0].name}`} />
				}
		        
		    </Accordion>
		    );
	}
}

export default UserWebsites