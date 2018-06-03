import React from 'react'
import { Button, Icon, Item, Label, Header, List, Grid } from 'semantic-ui-react'
import PurchasePlanModal from './PurchasePlanModal.js'



class Plans extends React.Component {
 state = { open: false, chosenPlan : null }

  show = (plan) => this.setState({ open: true, chosenPlan: plan })
  close = () => this.setState({ open: false })


	render() {
		return (

			<Grid celled className="GuestPage-plans" container>
				<Grid.Row stretched>
					<Grid.Column widescreen={16}>
		
						<Header as="h1" className="centered">Welcome to our webhosting project</Header>
							<Header as="h2" className="centered">
							 It covers some basic functionality
							 which for the most part is totally not stubbed, no doubt. Check out the different plans we think might be relevant for such a service
							</Header>

						<Item.Group divided relaxed="very">
							<Item>
								<Item.Image >
									<Icon name="star half empty" color="teal" size="massive"/>
								</Item.Image>

								<Item.Content>
									<Item.Header as='a'>Free plan</Item.Header>
									<Item.Description>This is the free plan bruh. You will get basic functionality like:
										<List size="massive">
											<List.Item ><Icon name="world"/>Ability to host up to 3 websites</List.Item>
											<List.Item><Icon name="folder"/>20GB storage capacity</List.Item>
										</List>
									</Item.Description>
									<Item.Extra>
									<Button as='div' labelPosition='right' onClick={this.show.bind(this,'Free plan')}>
										<Button color='teal'>
											<Icon name='cart' />
										Get plan
										</Button>
										<Label as='a' basic color='teal' pointing='left'>0$/month</Label>
									</Button>
									</Item.Extra>

								</Item.Content>
							</Item>

							<Item>
								<Item.Image >
									<Icon name="star" color="teal" size="massive"/>
								</Item.Image>


								<Item.Content>
									<Item.Header as='a'>Basic plan</Item.Header>
									<Item.Description>This is the basic plan. You will get standard functionality like:
										<List size="massive">
											<List.Item><Icon name="world"/>Ability to host up to 10 websites</List.Item>
											<List.Item><Icon name="folder"/>100GB storage capacity</List.Item>
											<List.Item><Icon name="database"/>Ability to connect MySQL database</List.Item>
										</List>
									</Item.Description>
									<Item.Extra>
									<Button as='div' labelPosition='right' onClick={this.show.bind(this,'Basic plan')}>
										<Button color='teal'>
											<Icon name='cart' />
										Get plan
										</Button>
										<Label as='a' basic color='teal' pointing='left'>20$/month</Label>
									</Button>
									</Item.Extra>

								</Item.Content>
							</Item>

							<Item>
								<Item.Image >
								<Icon name="star" color="orange" size="massive"/>
								</Item.Image>

								<Item.Content>
									<Item.Header as='a'>P R I M E  hosting</Item.Header>
									<Item.Description>This is as best as it gets. You get top functionality like:
										<List size="massive">
											<List.Item><Icon name="world"/>Ability to host up to 30 websites</List.Item>
											<List.Item><Icon name="folder"/>1TB storage capacity</List.Item>
											<List.Item><Icon name="database"/>Ability to connect MySQL database</List.Item>
										</List>
									</Item.Description>
									<Item.Extra>
									<Button as='div' labelPosition='right' onClick={this.show.bind(this,'Prime plan')}>
										<Button color='orange'>
											<Icon name='cart' />
										Get plan
										</Button>
										<Label as='a' basic color='orange' pointing='left'>50$/month</Label>
									</Button>
									</Item.Extra>

								</Item.Content>
							</Item>
						</Item.Group>

						<PurchasePlanModal openState={this.state.open} closeModal={this.close} authenticate={this.props.authenticate} chosenPlan={this.state.chosenPlan}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);
	}

}

export default Plans;