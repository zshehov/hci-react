import React, {Component} from 'react'
import { Container, Segment } from 'semantic-ui-react'
import HeaderPart from './HeaderPart.js'
import Plans from './Plans.js'
import './SegmentColors.css'


class GuestPage extends Component{

	render(){
		return (
			<Container>
				<Segment size="mini" className="greySegment"  content={<HeaderPart authenticate={this.props.authenticate}/>}/>
				<Segment className="greySegment" content={<Plans  authenticate={this.props.authenticate} hidden={false} />}/>
			</Container>	

			);
	}
}

export default GuestPage;