import React from 'react';
import { View, Text } from 'react-native';
import { layout, typography } from '../themes';

class HomeScreen extends React.Component
{
	static route = {
		navigationBar: {
			title: 'Tenants360'
		}
	}

	render()
	{
		return (
			<View style={layout.container}>
				<Text style={typography.p}>HomeScreen.js</Text>
				<Text style={typography.p} onPress={this.enterVerificationCode}>Enter Verification Code</Text>
			</View>
		)
	}

	enterVerificationCode = () => {
		this.props.navigator.push('enterVerificationCode');
	}
}

export default HomeScreen;