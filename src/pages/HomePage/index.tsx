import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import ListProducts from '../../components/ListProducts'
import SearchBar from '../../components/SearchBar'
import LocationBar from '../../components/LocationBar'
import PromoBar from '../../components/PromoCard'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-community/async-storage'

export default function App() {
	const [currentLocation, setCurrentLocation] = useState<any>(null)
	const [city, setCity] = useState<string>('')
	const [name, setName] = useState<string>('')

	useEffect(() => {
		;(async () => {
			const { status } = await Location.requestPermissionsAsync()

			const getUserInfo = await AsyncStorage.getItem('@userLogged')

			const { name } = JSON.parse(getUserInfo)

			setName(name)

			if (status === 'granted') {
				const location = await Location.getCurrentPositionAsync({})
				const {
					coords: { latitude, longitude },
				} = location

				const hasUserLocationOnStorage = await AsyncStorage.getItem('@userLocation')

				if (!hasUserLocationOnStorage) {
					fetch(
						`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBwJpOTDp1D6GOSGdGTATiCSN84gFEzuJE&language=pt-BR`
					)
						.then((res) => res.json())
						.then(async (res) => {
							const { formatted_address, address_components } = res.results[0]

							const city = address_components.find(
								(address: any) => address.types.indexOf('administrative_area_level_2') !== -1
							)

							const userLocation = {
								city: city.long_name,
								completeAddress: formatted_address,
							}

							await AsyncStorage.setItem('@userLocation', JSON.stringify(userLocation))

							setCurrentLocation(formatted_address)
							setCity(city.long_name)
						})
				} else {
					const { city, completeAddress } = JSON.parse(hasUserLocationOnStorage)
					setCurrentLocation(completeAddress)
					setCity(city)
				}
			}
		})()
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.SearchBar}>
				<SearchBar onSubmit={null} value={null} updateValue={null} clearValue={null} />
			</View>
			<View style={styles.LocationBar}>
				<LocationBar name={name} address={currentLocation} />
			</View>

			<ScrollView style={styles.container}>
				<PromoBar />
				<ListProducts city={city.toUpperCase()} />
			</ScrollView>
		</View>
	)
}
