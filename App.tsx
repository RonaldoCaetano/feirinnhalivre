import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AppNavigator from './src/appNavigator'
import * as firebase from 'firebase'
import { firebaseConfig } from './config'
import AsyncStorage from '@react-native-community/async-storage'

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export default function App() {
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user: any) => {
			const getAsyncStorage = await AsyncStorage.getItem('@userLogged')

			if (user && user !== null && !getAsyncStorage) {
				try {
					const userLoggedInInfo = {
						isLogged: true,
						userInfo: user,
					}
					await AsyncStorage.setItem('@userLogged', JSON.stringify(userLoggedInInfo))
				} catch (e) {
					console.error(e)
				}
			}
		})
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#ffa608" translucent />
			<AppNavigator />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
