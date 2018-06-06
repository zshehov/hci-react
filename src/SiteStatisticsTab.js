import React from 'react'
import { Container, Segment, Table, Header, Divider, Statistic, Icon } from 'semantic-ui-react';
import SiteStatsRow from './SiteStatsRow'

const SiteStatistics = (props) => {
	return (
		<Container centered>
		<Segment centered textAlign='justified'  basic> 
			<Table.Header fullWidth>						
				<Header  color='brown' size='large'>Monthly site views</Header>	
			</Table.Header>
			<Table    floated='left'  textAlign='center'  basic >
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

export default SiteStatistics
