import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import { products } from '../../../test'
import ListProducts from '../../components/ListProducts'
import SearchBar from '../../components/SearchBar'
import LocationBar from '../../components/LocationBar'
import PromoBar from '../../components/PromoCard'

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.SearchBar}>
				<SearchBar onSubmit={null} value={null} updateValue={null} clearValue={null} />
			</View>
			<View style={styles.LocationBar}>
				<LocationBar name={'João Marcos'} address={'Rua Antônio Hércules, 66'} />
			</View>

			<ScrollView style={styles.container}>
				<PromoBar />
				<ListProducts products={products} />
			</ScrollView>
		</View>
	)
}
