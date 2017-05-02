import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { Container, Content } from 'native-base';
import Routes from './navigation/Routes';

class App extends React.Component
{
	render()
	{
		return (
			<NavigationProvider router={Routes}>
				<StackNavigation id="root" initialRoute="login" />
			</NavigationProvider>
		)
	}
}

export default App;