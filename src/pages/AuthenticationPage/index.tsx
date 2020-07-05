import React, { useState } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import api from '../../api'
import AsyncStorage from '@react-native-community/async-storage'

interface RouteParams {
	phone: string
	accessToken: string
}

export default function App() {
	const navigation = useNavigation()
	const route = useRoute()

	const [accessTokenValue, setAccessTokenValue] = useState<string>('')

	const { phone, accessToken }: RouteParams = route.params

	async function verifyToken() {
		if (Number(accessToken) === Number(accessTokenValue)) {
			await api
				.get(`/user/${phone}`)
				.then(async ({ data }) => {
					if (data && data.length) {
						const { nome, sobrenome, telefone, id } = data[0]

						const getUserStorage = await AsyncStorage.getItem('@userLogged')

						if (getUserStorage) {
							await AsyncStorage.removeItem('@userLogged')
						}

						await AsyncStorage.setItem('@userLogged', JSON.stringify({ name: nome, telefone }))

						// navigation.navigate('Tabs')
						navigation.navigate('Nome', { phone })
					} else {
						navigation.navigate('Nome', { phone })
					}
				})
				.catch((error) => {
					// console.error(error)
					Alert.alert('Erro ao buscar o usuário')
				})
		} else {
			Alert.alert('O Token não confere com o que enviamos para você, por favor, tente novamente')
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				<Image style={styles.melinho} source={require('../../../assets/images/MelinhoAuth.png')} />

				<Text style={styles.TextAuth}>
					Olá! Eu sou o Melinho oLIVREira! Te mandei uma mensagem com um número de autenticação, por favor
					insira-o no campo abaixo :)
				</Text>

				<KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
					<View style={styles.AuthInput}>
						<TextInput
							style={styles.AuthTextView}
							placeholder="Coloque o número aqui"
							keyboardType="number-pad"
							onChangeText={(e) => setAccessTokenValue(e)}
						/>
					</View>

					<TouchableOpacity style={styles.ButtonAdvance} onPress={verifyToken}>
						<Text style={styles.Text}>AVANÇAR</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		</View>
	)
}
