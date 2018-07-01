import React, { Component } from 'react'
import { Input, Loader, Dimmer, Button, Modal, Header } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import "./UserContent.css"
import { makePostRequest } from './ServerRequests.js'
class SideMenu extends Component {

  state = { open: false, newSite : '' }

  updateValue = (event) => {
    this.setState({newSite : event.target.value});
  }

  addSite = () => {

    try {
      // SHOULD HAVE A CHECK FOR REPEATING IN DB
      makePostRequest( { userName : sessionStorage.getItem('userName'), siteUrl : this.state.newSite }, "add_site").then(
        response => {

            this.props.appendSite(response['success_added']);
        }).catch(err => {
          console.log("first catch" + err);
        });

    } catch(err) {
      console.log("second catch");
    }

    this.setState({open: false, newSite : ''});
  }

  close = () => this.setState({ open: false })
  show = () => this.setState({ open: true })

  changeActiveSite = (event) => {
    console.log(event.target.getAttribute('active'));
    event.target.getAttribute('active');
  }


    render() {    
      return (
        <div className='ui vertical menu fluid sideMenuTopLevelWrapper'>

          <div className="item">
            <Input icon='search' placeholder='Search sites...' />
          </div>

          <Modal color="teal" open={this.state.open} size="mini" trigger={
            <Button.Group fluid><Button className="addSite-button" color="teal" icon="plus" content="Add website" onClick={this.show}/></Button.Group>}>

            <Modal.Header>Add your new website</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Domain name</Header>
                </Modal.Description>
                <Input fluid value={this.state.newSite} onChange={this.updateValue} placeholder="Enter domain name"/>  
              </Modal.Content>

              <Modal.Actions>
                <Button size="huge" color='green' onClick={this.addSite}>Add</Button>
                <Button size="huge" color='grey' onClick={this.close}>Close</Button>
              </Modal.Actions>
          </Modal>

          <div className="overflowY-wrapper">
              {
                this.props.sideMenuItems ? (

                        this.props.sideMenuItems.map(item =>    
                        <NavLink className="item" as={Button} to={`${this.props.match.url}/${item.name}`} key={item.name}>
                            {item.name}
                        </NavLink> )
                        
                        ) : ( <Dimmer blurring="true" inverted active >
                  <Loader size='huge' inline > Loading</Loader>
                </Dimmer>)

              }
            


          </div>


        </div>
      )
    }
}
export default withRouter(SideMenu)