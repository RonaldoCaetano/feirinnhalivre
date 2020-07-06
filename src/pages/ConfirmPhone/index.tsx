import React, { useState } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../api'
import accentRemover from './../../utils/accentRemover'

export default function ConfirmPhone() {
	const navigation = useNavigation()
	const route = useRoute()

	const {
		params: { name },
	} = route

	const [phone, setPhone] = useState<string>('')

	async function handleSubmit() {
		if (phone !== '') {
			const getUserStorage = await AsyncStorage.getItem('@userLogged')

			if (getUserStorage) {
				await AsyncStorage.removeItem('@userLogged')
			}

			api.post('/user', {
				firstName: name,
				phone: accentRemover(phone, true),
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
			Alert.alert('Você precisa preencher o seu telefone para continuar')
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<KeyboardAvoidingView style={styles.EmailAuth} behavior="padding" enabled>
				<Text style={{ fontSize: 20, marginBottom: 10, textAlign: 'center' }}>
					Precisamos apenas do seu telefone para completar o cadastro
				</Text>
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
	)
}
