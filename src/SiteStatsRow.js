import React from 'react'
import { Table } from 'semantic-ui-react'
import "./SiteStatsRow.css"

const SiteStatsRow = (props) => {
	return(
		<Table.Row >
			<td  class="collapsing">{props.visits}</td>
			<td  id="start"class={determine_color(30,props.visits)} ></td>
			<td  id="middle" class={determine_color(30,props.visits)} ></td>
			<td  id="middle" class={determine_color(20,props.visits)} ></td>
			<td  id="middle" class={determine_color(50,props.visits)}></td>
			<td  id="middle" class={determine_color(10,props.visits)}></td>
			<td  id="middle" class={determine_color(40,props.visits)}></td>
			<td  id="middle" class={determine_color(10,props.visits)}></td>
			<td  id="middle" class={determine_color(30,props.visits)}></td>
			<td  id="middle" class={determine_color(20,props.visits)}></td>
			<td  id="middle" class={determine_color(40,props.visits)}></td>
			<td  id="middle" class={determine_color(50,props.visits)} ></td>
			<td  id="middle" class={determine_color(10,props.visits)} ></td>
			<td  id="middle" class={determine_color(10,props.visits)} ></td>
			<td  id="middle" class={determine_color(30,props.visits)} ></td>
			<td  id="middle" class={determine_color(50,props.visits)} ></td>
			<td  id="middle" class={determine_color(20,props.visits)} ></td>
		</Table.Row  >
		);
}

function determine_color ( column,  row){

	if( row <= column){
		return "ui inverted teal table collapsing";
	}else{
		return "collapsing";
	}
}

export default SiteStatsRow 