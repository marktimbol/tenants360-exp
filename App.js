import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import Router from './navigation/Router';
import layout from './themes/layout';
import typography from './themes/typography';

class App extends React.Component
{
	render()
	{
		return (
			<View style={layout.container}>
				<NavigationProvider router={Router}>
					<StackNavigation id="root" initialRoute="home" />
				</NavigationProvider>
			</View>
		)
	}
}

export default App;