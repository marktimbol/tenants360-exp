import React from 'react';
import { View, Text } from 'react-native';
import { layout, typography } from '../themes';

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
			<View style={layout.container}>
				<Text style={typography.p}>Enter your code</Text>
			</View>
		)
	}
}

export default EnterVerificationCodeScreen;