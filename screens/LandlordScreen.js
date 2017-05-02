import React from 'react';
import { Container, Content } from 'native-base';
import { Text } from 'react-native';

class LandlordScreen extends React.Component
{
	static route = {
		navigationBar: {
			title: 'Landlord Information'
		}
	}

	render()
	{
		return (
			<Container>
				<Content padder={true}>
					<Text>Landlord information</Text>
				</Content>
			</Container>
		)
	}
}

export default LandlordScreen;