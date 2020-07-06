import React from 'react'
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

export default function App() {
	const navigation = useNavigation()
	const route = useRoute()

	async function removeStorage() {
		await AsyncStorage.removeItem('@sellerProductData')
		navigation.navigate('Produto', { name: route.params.prodName })
	}

	removeStorage()

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				<Text style={styles.TextAuth}>Seu produto foi adicionado com sucesso!</Text>

				<Image style={styles.melinho} source={require('../../../assets/images/success.png')} />

				<TouchableOpacity style={styles.ButtonAdvance} onPress={removeStorage}>
					<Text style={styles.Text}>VER ANÚNCIO</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
