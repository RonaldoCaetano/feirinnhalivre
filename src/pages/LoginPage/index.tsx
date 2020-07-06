import React, { useEffect, useState } from 'react'
import {
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
	Text,
	View,
	Image,
	TouchableOpacity,
	ActivityIndicator,
	Alert,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Google from 'expo-google-app-auth'
import * as Facebook from 'expo-facebook'
import firebase from 'firebase'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import api from '../../api'
import accentRemover from './../../utils/accentRemover'

export default function App() {
	const navigation = useNavigation()

	const [loading, setLoading] = useState<boolean>(true)
	const [phone, setPhone] = useState<string>('')

	useEffect(() => {
		;(async () => {
			const userLoggedData = await AsyncStorage.getItem('@userLogged')
			if (userLoggedData) {
				navigation.navigate('Tab')
			}

			setLoading(false)
		})()
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
					.then((data) => {
						if (data?.additionalUserInfo?.profile?.name) {
							const {
								additionalUserInfo: {
									profile: { name },
								},
							} = data

							navigation.navigate('Telefone', { name })
						}
					})
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
					.then((data) => {
						if (data?.additionalUserInfo?.profile?.name) {
							const {
								additionalUserInfo: {
									profile: { name },
								},
							} = data

							navigation.navigate('Telefone', { name })
						}
					})
					.catch((error) => console.error(error))
			}
		})
	}

	function handleSubmit() {
		const accessToken = Math.ceil(Math.random() * 10000)

		api.post('/message', {
			message: `Seu código de acesso - ${accessToken}`,
			phone: accentRemover(phone, true),
		})
			.then(({ data }) => {
				if (data && data.response) {
					navigation.navigate('Cadastro', { phone: accentRemover(phone, true), accessToken })
				}
			})
			.catch((error) => {
				// console.error(error)
				Alert.alert('Ocorreu um erro ao enviar a mensagem, por favor, tente novamente')
			})
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<View style={styles.ButtonContainer}>
					<Image style={styles.logotipo} source={require('../../../assets/images/logotipo.png')} />

					<View>
						<View style={styles.SocialContainer}>
							<TouchableOpacity
								style={styles.SocialButtonFacebook}
								onPress={() => signInWithFacebookAsync()}
							>
								<Ionicons style={styles.SocialIcon} name="logo-facebook" size={22} color="#F9F3EE" />
								<Text style={styles.SocialText}>Entrar com o Facebook</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.SocialContainer}>
							<TouchableOpacity style={styles.SocialButtonGoogle} onPress={() => signInWithGoogleAsync()}>
								<Ionicons style={styles.SocialIcon} name="logo-google" size={22} color="#F9F3EE" />
								<Text style={styles.SocialText}>Entrar com o Google</Text>
							</TouchableOpacity>
						</View>
					</View>

					<Text style={styles.Divider}>ou</Text>

					<KeyboardAvoidingView style={styles.EmailAuth} behavior="padding" enabled>
						<View style={styles.AuthInput}>
							<TextInput
								style={styles.AuthTextView}
								placeholder="Seu telefone. Ex: 1199999-9999"
								keyboardType="number-pad"
								onChangeText={(e) => setPhone(e)}
							/>
						</View>

						<TouchableOpacity style={styles.ButtonLogin} onPress={handleSubmit}>
							<Text style={styles.Text}>Avançar</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				</View>
			)}
		</View>
	)
}
