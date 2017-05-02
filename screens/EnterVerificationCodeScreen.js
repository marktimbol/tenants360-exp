import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, Button } from 'native-base';

class EnterVerificationCodeScreen extends React.Component
{
	static route = {
		navigationBar: {
			title: 'Enter Verification Code'
		}
	}

	render()
	{
		return (
			<Container>
				<Content padder={true}>
					<Text style={styles.p}>Enter your code</Text>

					<Button rounded success onPress={() => this.props.navigator.push('home') }>
						<Text style={{ color: '#fff' }}>Go to App</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	p: {
		color: '#555',
		marginBottom: 16,
	}
})

export default EnterVerificationCodeScreen;