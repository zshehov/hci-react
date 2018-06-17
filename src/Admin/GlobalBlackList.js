import React from 'react'
import BlackList from '../SiteBlacklistTab'
import { Segment } from 'semantic-ui-react'
import '../SegmentColors.css'

const GlobalBlackList = (props) => {
	return (
		<Segment basic className="greySegment" style={{'height' : '83vh'}}>
			<BlackList style={{'max-height' : '100vh'}}/>
		</Segment>);
}

export default GlobalBlackList