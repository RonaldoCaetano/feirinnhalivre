import React, { useState, useEffect } from 'react'
import {
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
	Text,
	View,
	Image,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
} from 'react-native'
import styles from './styles'
import api from '../../api'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import accentRemover from '../../utils/accentRemover'

export default function App() {
	const navigation = useNavigation()

	const [document, setDocument] = useState<string>('')
	const [city, setCity] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		verifyUser()
	}, [])

	async function verifyUser() {
		const getUserInfo = await AsyncStorage.getItem('@userLogged')

		if (getUserInfo) {
			const { phone } = JSON.parse(getUserInfo)
			const { data } = await api.get(`/seller/${phone}`)

			if (data?.length) {
				navigation.navigate('VenderProduto')
			} else {
				setLoading(false)
			}
		}
	}

	async function setUser() {
		const getUserInfo = await AsyncStorage.getItem('@userLogged')

		if (getUserInfo) {
			const { name, phone } = JSON.parse(getUserInfo)

			api.post('/seller', {
				firstName: name,
				phone,
				document,
				city: accentRemover(city).toUpperCase(),
			})
				.then(({ data }) => {
					if (data) {
						navigation.navigate('VenderProduto')
					}
				})
				.catch(() => {
					Alert.alert('Tivemos um erro ao realizar o cadastro, por favor, tente novamente')
				})
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				{loading ? (
					<ActivityIndicator size="large" />
				) : (
					<>
						<Image style={styles.melinho} source={require('../../../assets/images/MelinhoAuth.png')} />

						<Text style={styles.TextAuth}>
							Vamos vender juntos! Para começar a vender na Feirinha precisamos que você preencha os
							campos abaixo :)
						</Text>

						<KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
							<View style={styles.AuthInput}>
								<TextInput
									style={styles.AuthTextView}
									placeholder="CPF ou CNPJ"
									keyboardType="default"
									onChangeText={(e) => setDocument(e)}
								/>
							</View>

							<View style={styles.AuthInput}>
								<TextInput
									style={styles.AuthTextView}
									placeholder="Cidade"
									keyboardType="default"
									onChangeText={(e) => setCity(e)}
								/>
							</View>

							<TouchableOpacity style={styles.ButtonAdvance} onPress={setUser}>
								<Text style={styles.Text}>AVANÇAR</Text>
							</TouchableOpacity>
						</KeyboardAvoidingView>
					</>
				)}
			</View>
		</View>
	)
}
