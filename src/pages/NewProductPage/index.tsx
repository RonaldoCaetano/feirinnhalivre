import React, { useState } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import api from './../../api'

export default function App() {
	const navigation = useNavigation()

	const [name, setName] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [price, setPrice] = useState<string>('')

	async function handleProductsRegister() {
		const getAsyncStorage = await AsyncStorage.getItem('@sellerProductData')
		const getUserStorage = await AsyncStorage.getItem('@userLogged')

		if (getAsyncStorage && getUserStorage) {
			const { picturesInBase64, categorySelected } = JSON.parse(getAsyncStorage)
			const { phone } = JSON.parse(getUserStorage)

			await api
				.post(`/product`, {
					name,
					description,
					basePrice: price,
					phone,
					imageUrl: JSON.stringify(picturesInBase64),
				})
				.then(({ data }) => {
					if (data) {
						navigation.navigate('SucessoProduto', { prodName: name })
					}
				})
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				<Image style={styles.melinho} source={require('../../../assets/images/MelinhoAuth.png')} />

				<Text style={styles.TextAuth}>
					Falta pouco! Coloque o nome, descrição e preço para seu produto se destacar na Feirinha
				</Text>

				<KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
					<Text>Nome do Produto:</Text>
					<View style={styles.AuthInput}>
						<TextInput
							style={styles.AuthTextView}
							placeholder="Coloque o nome do Produto aqui"
							keyboardType="default"
							onChangeText={(e) => setName(e)}
						/>
					</View>

					<Text>Descrição do Produto:</Text>
					<View style={styles.DescInput}>
						<TextInput
							style={styles.DescTextView}
							placeholder="Coloque a descrição do produto"
							keyboardType="default"
							multiline
							onChangeText={(e) => setDescription(e)}
						/>
					</View>

					<Text>Preço do Produto:</Text>
					<View style={styles.AuthInput}>
						<TextInput
							style={styles.AuthTextView}
							placeholder="Coloque o preço do produto"
							keyboardType="decimal-pad"
							onChangeText={(e) => setPrice(e)}
						/>
					</View>

					<TouchableOpacity style={styles.ButtonAdvance} onPress={handleProductsRegister}>
						<Text style={styles.Text}>VENDER</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		</View>
	)
}
