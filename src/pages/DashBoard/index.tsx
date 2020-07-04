import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import firebase from 'firebase'

export default function DashBoard() {
	function signOutUser() {
		firebase.auth().signOut()
	}

	return (
		<View style={styles.container}>
			<Text>DashBoard</Text>
			<Button title="Sair" onPress={() => signOutUser()}>
				Sign Out
			</Button>
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
