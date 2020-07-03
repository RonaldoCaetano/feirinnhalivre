import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import * as Google from 'expo-google-app-auth'
import firebase from 'firebase'

export default function Login() {
	function onSignIn(googleUser: any) {
		// We need to register an Observer on Firebase Auth to make sure auth is initialized.
		const unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
			unsubscribe()
			// Check if we are already signed-in Firebase with the correct user.
			if (!isUserEqual(googleUser, firebaseUser)) {
				// Build Firebase credential with the Google ID token.
				const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.idToken)
				// Sign in with credential from the Google user.
				firebase
					.auth()
					.signInWithCredential(credential)
					.then(function (result) {
						if (result?.user && result?.additionalUserInfo?.profile) {
							firebase.database().ref(`/users/${result?.user?.uid}`).set({
								gmail: result.user?.email,
								firstName: result.user.displayName,
							})
						}
					})
					.catch(function (error) {
						console.error(error)
					})
			}
		})
	}

	function isUserEqual(googleUser: any, firebaseUser: any) {
		if (firebaseUser) {
			const providerData = firebaseUser.providerData
			const hasProviderData = providerData.some(
				(provider: any) =>
					provider.providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
					provider.uid === googleUser.getBasicProfile().getId()
			)

			return hasProviderData
		}
		return false
	}

	async function signInWithGoogleAsync() {
		try {
			const result = await Google.logInAsync({
				behavior: 'web',
				androidClientId: '520153184300-av711q15ehodbl760b6mg3f17qk4jtnd.apps.googleusercontent.com',
				iosClientId: '520153184300-7sb3leebu5on6n0ad4ve0htjapfeoh22.apps.googleusercontent.com',
				scopes: ['profile', 'email'],
			})

			if (result.type === 'success') {
				onSignIn(result)
				return result.accessToken
			} else {
				return { cancelled: true }
			}
		} catch (e) {
			return { error: true }
		}
	}

	return (
		<View style={styles.container}>
			<Button title="Entre com o Google" onPress={() => signInWithGoogleAsync()} />
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
