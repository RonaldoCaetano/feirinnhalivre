import React, { useState, useEffect } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../api'

export default function App() {
	const route = useRoute()

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				<Text style={styles.TextAuth}>Seu produto foi adicionado com sucesso!</Text>

				<Image style={styles.melinho} source={require('../../../assets/images/success.png')} />

				<TouchableOpacity
					style={styles.ButtonAdvance}
					onPress={() => navigation.navigate('Produto', { name: route.params.prodName })}
				>
					<Text style={styles.Text}>VER ANÚNCIO</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
