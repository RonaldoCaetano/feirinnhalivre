import React, { useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import firebase from 'firebase'

export default function Loading() {
	const navigation = useNavigation()

	useEffect(() => {
		checkLoggedIn()
	}, [])

	function checkLoggedIn() {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				navigation.navigate('DashBoardScreen')
			} else {
				navigation.navigate('LoginScreen')
			}
		})
	}

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
