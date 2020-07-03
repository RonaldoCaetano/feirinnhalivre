import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './pages/Login'
import LoadingScreen from './pages/Loading'
import DashBoardScreen from './pages/DashBoard'

const AppStack = createStackNavigator()

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator headerMode="screen">
				<AppStack.Screen name="LoadingScreen" component={LoadingScreen} />
				<AppStack.Screen name="LoginScreen" component={LoginScreen} />
				<AppStack.Screen name="DashBoardScreen" component={DashBoardScreen} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
