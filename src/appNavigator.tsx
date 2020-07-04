import React from 'react'
import { createSwitchNavigator, SwitchRouter, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Platform } from 'react-native'

import TabBarIcon from './components/TabBarIcon'
import HomeScreen from './pages/HomePage'
import LoginScreen from './pages/LoginPage'
import AuthenticationScreen from './pages/DocumentPage'
import NameScreen from './pages/NamePage'
import ProfileScreen from './pages/ProfilePage'

const AppStack = createStackNavigator()
const AppTab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<NavigationContainer independent={true}>
			<AppTab.Navigator>
				<AppTab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
						),
					}}
				/>
				<AppTab.Screen
					name="Favoritos"
					component={AuthenticationScreen}
					options={{
						tabBarLabel: 'Favoritos',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-heart` : 'md-heart'} />
						),
					}}
				/>
				<AppTab.Screen
					name="Carrinho"
					component={NameScreen}
					options={{
						tabBarLabel: 'Carrinho',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'} />
						),
					}}
				/>
				<AppTab.Screen
					name="Perfil"
					component={ProfileScreen}
					options={{
						tabBarLabel: 'Perfil',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-contact` : 'md-contact'} />
						),
					}}
				/>
			</AppTab.Navigator>
		</NavigationContainer>
	)
}

const AuthNavigator = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator>
				<AppStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Cadastro" component={AuthenticationScreen} />
				<AppStack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default createAppContainer(
	createSwitchNavigator(
		{
			Auth: AuthNavigator,
			Tab: TabNavigator,
		},
		{
			initialRouteName: 'Auth',
		}
	)
)
