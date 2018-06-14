import React from 'react'
import { Segment, List, Icon, Radio } from 'semantic-ui-react'

const WebSites = (props) =>{

	return(<Segment basic>
		<List>
			 <List.Item>
		      <List.Content floated='right'>
		      	<Radio label='Site running' toggle/>
		      </List.Content>
		    </List.Item>
		    <List.Item>
		      <List.Icon name='folder' size='huge' color='yellow'/>
		      <List.Content as='h2'>Site Size: 60MB</List.Content>
		    </List.Item>
		    <List.Item>
		      <List.Icon name='area graph' size='huge' color='olive'/>
		      <List.Content as='h2'>Monthly Traffic</List.Content>
		    </List.Item>
		    <List.Item >
		      <List.Content floated='right' as='h3'>
		      	 <List.Icon name='mail' size='medium'/>
		        <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
		      </List.Content>
		    </List.Item>
		    <List.Item >
		      <List.Content floated='right' as='h3'>
		      	<List.Icon name='linkify' size='medium' />
		      		Site url:
		        <a href='http://www.semantic-ui.com'>  semantic-ui.com</a>
		      </List.Content>
		   	</List.Item>
		</List>
	</Segment>);
}

export default WebSites