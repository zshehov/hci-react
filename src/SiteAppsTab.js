import React from 'react'
import { Item, Radio, Icon } from 'semantic-ui-react'


const SiteAppsTab = (props) => (

	<Item.Group relaxed divided >
		<Item>

			<Item><Icon size='massive' color='blue' name="database"/></Item>

			<Item.Content verticalAlign='middle'>
				<Item.Header>MySQL database</Item.Header>
				<Item.Description>Enable a MySQL database for your website. MySQL is an open-source relational database management system, with source code available under the terms of the GNU General Public License</Item.Description>
				<Item.Extra>
					<Radio toggle floated='right'/>
				</Item.Extra>
			</Item.Content>
		</Item>

		<Item>
			<Item><Icon size='massive' color='yellow' name="mail"/></Item>

			<Item.Content verticalAlign='middle'>
				<Item.Header>Email</Item.Header>
				<Item.Description>Connect an email service to your website. This way users will be able to write for support on an email address with your domain name</Item.Description>
				<Item.Extra>
					<Radio toggle floated='right'/>
				</Item.Extra>
			</Item.Content>
		</Item>

		<Item>
			<Item><Icon size='massive' color='green' name="key"/></Item>

			<Item.Content verticalAlign='middle'>
				<Item.Header>Encryption</Item.Header>
				<Item.Description>For maximum security enable encryption for sensitive information on our host. This way you will never have to worry for people getting their hands on your sensitive data</Item.Description>
				<Item.Extra>
					<Radio toggle floated='right'/>
				</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>

)

export default SiteAppsTab;