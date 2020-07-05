import React, { useState, useEffect } from 'react'
import { StatusBar, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './styles'
import UserPartials from '../../components/UserPartials'
import api from './../../api'
import AsyncStorage from '@react-native-community/async-storage'
import { useRoute } from '@react-navigation/native'
import currencyFormat from '../../utils/formatPrice'

const { height } = Dimensions.get('screen')

export default function App() {
	const [productResponse, setProductResponse] = useState<any>([])
	const [address, setAddress] = useState<string>('')

	const route = useRoute()

	useEffect(() => {
		;(async () => {
			const getUserLocation = await AsyncStorage.getItem('@userLocation')

			const { completeAddress } = JSON.parse(getUserLocation)

			setAddress(completeAddress)

			await api.get(`/product/${route.params.name}`).then((response) => {
				if (response?.data) {
					setProductResponse(response.data[0])
				}
			})
		})()
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
				<Swiper
					style={{ height: height / 2.3, marginBottom: 20 }}
					activeDotColor="white"
					dotColor="rgba(255, 255, 255, 0.3)"
				>
					<Image
						style={styles.image}
						source={{
							uri: productResponse.url_imagem,
						}}
					/>
				</Swiper>
				<View style={styles.dataContainer}>
					<View style={styles.TimeLocation}>
						<Text>{address} • 2h </Text>
					</View>
					<View style={styles.NamePrice}>
						<Text style={styles.NamePriceText}>{productResponse.nome}</Text>
						<Text style={styles.NamePriceText}>{currencyFormat(productResponse.preco_base)}</Text>
						<Text style={styles.NamePromoText}>10% OFF</Text>
					</View>
					<View style={styles.divider} />

					<Text style={styles.description}>{productResponse.descricao}</Text>
					<UserPartials
						name="João Marcos"
						rating={4.6}
						avatarUrl={require('../../../assets/images/lgAvatar.png')}
					/>
					<View style={styles.divider} />
				</View>
			</ScrollView>
		</View>
	)
}
