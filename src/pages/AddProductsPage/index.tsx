import React, { useState } from 'react'
import { StatusBar, Text, View, Image } from 'react-native'
import CategoryBar from '../../components/CategoryProductCard'
import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<View style={styles.ButtonContainer}>
				<Text style={styles.TextAuth}>Escolha a categoria que melhor se encaixa com seu produto:</Text>

				<CategoryBar />

				<Image style={styles.melinho} source={require('../../../assets/images/MelinhoAuth.png')} />
			</View>
		</View>
	)
}
