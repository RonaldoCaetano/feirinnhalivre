import React, { useState } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { products } from '../../../test'
import ListSellerProducts from '../../components/ListCartProducts'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../../components/SearchBar'

export default function App() {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<ScrollView style={styles.container}>
				<ListSellerProducts products={products} />
			</ScrollView>
			<View style={styles.SearchBar}>
				<Text style={styles.TextTotal}>Total: R$ 10,00</Text>

				<TouchableOpacity style={styles.ButtonBuy} onPress={() => navigation.navigate('Entrega')}>
					<Text style={styles.Text}>COMPRAR</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
