import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import firebase from 'firebase'
import * as Location from 'expo-location'

export default function DashBoard() {
	function signOutUser() {
		firebase.auth().signOut()
	}

	const [currentLocation, setCurrentLocation] = useState<any>(null)

	useEffect(() => {
		;(async () => {
			const { status } = await Location.requestPermissionsAsync()

			if (status === 'granted') {
				const location = await Location.getCurrentPositionAsync({})
				const {
					coords: { latitude, longitude },
				} = location

				fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBwJpOTDp1D6GOSGdGTATiCSN84gFEzuJE&language=pt-BR`
				)
					.then((res) => res.json())
					.then((res) => {
						const { formatted_address } = res.results[0]
						setCurrentLocation(formatted_address)
					})
			}
		})()
	}, [])

	return (
		<View style={styles.container}>
			<Text>{currentLocation}</Text>
			<Button title="Sair" onPress={() => signOutUser()} />
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
