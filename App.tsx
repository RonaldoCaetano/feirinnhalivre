import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
// import Routes from './src/routes'
import * as firebase from 'firebase'
import { firebaseConfig } from './config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/pages/Login'
import LoadingScreen from './src/pages/Loading'
import DashBoardScreen from './src/pages/DashBoard'

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

const AppStack = createStackNavigator()

export default function App() {
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
