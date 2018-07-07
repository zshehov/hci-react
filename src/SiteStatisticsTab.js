import React from 'react'
import { Container, Segment, Table, Header, Divider, Statistic, Icon, Button } from 'semantic-ui-react';
import SiteStatsRow from './SiteStatsRow'
import { withRouter} from 'react-router-dom'

const SiteStatistics = (props) => {
	return (
		<Container centered>
		<Segment centered textAlign='justified'  basic> 
			<Segment basic>						
				<Header  color='brown' size='large' floated='left'>Monthly site views</Header>	
				<Button floated='right' color='yellow' size='medium'>
					<a href={`https://vm-54-246-196-205.rosettavm.com:80/users/${props.userId}/sites/${props.siteUrl}`} style={{"color": "white"}} target="_blank">Visit: {props.siteUrl}</a>
				</Button>
			</Segment>
			<Table  padded floated='left'  textAlign='center'  basic >
				<Table.Body >
					<SiteStatsRow visits='50'/>
					<SiteStatsRow visits='40'/>
					<SiteStatsRow visits='30'/>
					<SiteStatsRow visits='20'/>
					<SiteStatsRow visits='10'/>

					<Table.Row >
						<Table.Cell></Table.Cell>
						<Table.Cell className='MYY'>01</Table.Cell>
						<Table.Cell>02</Table.Cell>
						<Table.Cell>03</Table.Cell>
						<Table.Cell>04</Table.Cell>
						<Table.Cell>05</Table.Cell>
						<Table.Cell>06</Table.Cell>
						<Table.Cell>07</Table.Cell>
						<Table.Cell>08</Table.Cell>
						<Table.Cell>09</Table.Cell>
						<Table.Cell>10</Table.Cell>
						<Table.Cell>11</Table.Cell>
						<Table.Cell>12</Table.Cell>
						<Table.Cell>13</Table.Cell>
						<Table.Cell>14</Table.Cell>
						<Table.Cell>15</Table.Cell>
						<Table.Cell>16</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</Segment>

		<Segment basic>
			<Statistic.Group>
			    <Statistic>
			      <Statistic.Value>22</Statistic.Value>
			      <Statistic.Label>Uniqe visitors</Statistic.Label>
			    </Statistic>

			    <Divider hidden horizontal/>

			    <Statistic>
			      <Statistic.Value >
			        12
			      </Statistic.Value>
			      <Statistic.Label>New visitors</Statistic.Label>
			    </Statistic>

			    <Divider hidden horizontal/>
			    
			    <Statistic color='green'>
			      <Statistic.Value >
			      	<Icon name='chart line'/>
			        10%
			      </Statistic.Value>
			      <Statistic.Label >Visit increase</Statistic.Label>
			    </Statistic>
			</Statistic.Group>
		</Segment>
		</Container>

		)
} 

export default withRouter(SiteStatistics);
