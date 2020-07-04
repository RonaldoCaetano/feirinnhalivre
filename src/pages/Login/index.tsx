import React, { useEffect } from 'react'
import { StyleSheet, View, Button, Alert } from 'react-native'
import * as Google from 'expo-google-app-auth'
import * as Facebook from 'expo-facebook'
import firebase from 'firebase'

export default function Login() {
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user: any) => {
			if (user && user !== null) {
				console.log(user)
			}
		})
	}, [])

	async function signInWithGoogleAsync() {
		try {
			const result = await Google.logInAsync({
				behavior: 'web',
				androidClientId: '520153184300-av711q15ehodbl760b6mg3f17qk4jtnd.apps.googleusercontent.com',
				iosClientId: '520153184300-7sb3leebu5on6n0ad4ve0htjapfeoh22.apps.googleusercontent.com',
				scopes: ['profile', 'email'],
			})

			if (result.type === 'success' && result.accessToken) {
				const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken)

				firebase
					.auth()
					.signInWithCredential(credential)
					.catch((error) => console.error(error))
				return result.accessToken
			} else {
				return { cancelled: true }
			}
		} catch (e) {
			return { error: true }
		}
	}

	async function signInWithFacebookAsync() {
		Facebook.initializeAsync('740800866676823')

		Facebook.logInWithReadPermissionsAsync({
			permissions: ['public_profile'],
		}).then((result) => {
			if (result.type === 'success') {
				const credential = firebase.auth.FacebookAuthProvider.credential(result.token)

				firebase
					.auth()
					.signInWithCredential(credential)
					.catch((error) => console.error(error))
			}
		})
	}

	return (
		<View style={styles.container}>
			<Button title="Entre com o Google" onPress={() => signInWithGoogleAsync()} />
			<Button title="Entre com o Facebook" onPress={() => signInWithFacebookAsync()} />
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
