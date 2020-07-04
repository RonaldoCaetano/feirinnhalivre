import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import { products } from '../../../test'
import ListProducts from '../../components/ListProducts'
import SearchBar from '../../components/SearchBar'
import LocationBar from '../../components/LocationBar'
import PromoBar from '../../components/PromoCard'
import * as Location from 'expo-location'

export default function App() {
	const [currentLocation, setCurrentLocation] = useState<any>(null)

	useEffect(() => {
		;(async () => {
			const { status } = await Location.requestPermissionsAsync()

			if (status === 'granted') {
				const location = await Location.getCurrentPositionAsync({})
				const {
					coords: { latitude, longitude },
				} = location

				fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBwJpOTDp1D6GOSGdGTATiCSN84gFEzuJE&language=pt-BR`
				)
					.then((res) => res.json())
					.then((res) => {
						const { formatted_address } = res.results[0]
						setCurrentLocation(formatted_address)
					})
			}
		})()
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.SearchBar}>
				<SearchBar onSubmit={null} value={null} updateValue={null} clearValue={null} />
			</View>
			<View style={styles.LocationBar}>
				<LocationBar name={'João Marcos'} address={currentLocation} />
			</View>

			<ScrollView style={styles.container}>
				<PromoBar />
				<ListProducts products={products} />
			</ScrollView>
		</View>
	)
}
