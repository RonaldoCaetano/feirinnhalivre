import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import Login from './pages/Login'

const AppStack = createStackNavigator()

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				headerMode="screen"
				screenOptions={{
					cardStyle: {
						backgroundColor: '#f0f0f5',
					},
				}}
			>
				{/* <AppStack.Screen name="Login" component={Login} /> */}
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
