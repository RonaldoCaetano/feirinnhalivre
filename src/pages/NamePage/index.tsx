import React, { useState } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../api'

export default function App() {
	const navigation = useNavigation()
	const route = useRoute()

	const {
		params: { phone },
	} = route

	const [name, setName] = useState<string>('')

	async function registerUser() {
		if (name !== '') {
			const getUserStorage = await AsyncStorage.getItem('@userLogged')

			if (getUserStorage) {
				await AsyncStorage.removeItem('@userLogged')
			}

			api.post('/user', {
				firstName: name,
				phone,
			})
				.then(async ({ data }) => {
					if (data) {
						await AsyncStorage.setItem('@userLogged', JSON.stringify({ name, phone }))
						navigation.navigate('Tab')
					}
				})
				.catch(async () => {
					await AsyncStorage.setItem('@userLogged', JSON.stringify({ name, phone }))
					navigation.navigate('Tab')
				})
		} else {
			Alert.alert('Você precisa preencher o seu nome para continuar')
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				<Image style={styles.melinho} source={require('../../../assets/images/MelinhoName.png')} />

				<Text style={styles.TextAuth}>
					Falta só a gente se conhecer! Conta seu nome e começe agora mesmo a sua Feirinha
				</Text>

				<KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
					<View style={styles.AuthInput}>
						<TextInput
							style={styles.AuthTextView}
							placeholder="Coloque o seu nome aqui"
							keyboardType="default"
							onChangeText={(e) => setName(e)}
						/>
					</View>

					<TouchableOpacity style={styles.ButtonAdvance} onPress={registerUser}>
						<Text style={styles.Text}>FINALIZAR</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		</View>
	)
}
