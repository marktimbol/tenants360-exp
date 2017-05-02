import React from 'react';
import { Container, Content } from 'native-base';
import { Text, StyleSheet } from 'react-native';

class RequestForMaintenanceScreen extends React.Component
{
	static route = {
		navigationBar: {
			title: 'Maintenance Request'
		}
	}

	render()
	{
		return (
			<Container>
				<Content>
					<Text>Maintenance Request</Text>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({

})

export default RequestForMaintenanceScreen;