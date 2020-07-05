import React, { useState } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { products } from '../../../test'
import ListSellerProducts from '../../components/ListSellerProducts'
import SearchBar from '../../components/SearchBar'
import { useNavigation } from '@react-navigation/native'

export default function App() {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<View style={styles.SearchBar}>
				<SearchBar onSubmit={null} value={null} updateValue={null} clearValue={null} />
			</View>

			<ScrollView style={styles.container}>
				<TouchableOpacity style={styles.ButtonAdvance} onPress={() => navigation.navigate('AddProduto')}>
					<Text style={styles.Text}>ADICIONAR PRODUTO</Text>
				</TouchableOpacity>
				<ListSellerProducts products={products} />
			</ScrollView>
		</View>
	)
}
