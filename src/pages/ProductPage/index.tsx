import React, { useState, useEffect } from 'react'
import { StatusBar, Text, View, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native'
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
	const [loading, setLoading] = useState<boolean>(true)

	const route = useRoute()

	async function getProducts() {
		if (loading) {
			const getUserLocation = await AsyncStorage.getItem('@userLocation')

			if (getUserLocation) {
				const { completeAddress } = JSON.parse(getUserLocation)

				setAddress(completeAddress)

				api.get(`/product/${route.params.name}`).then((response) => {
					if (response?.data) {
						setProductResponse(response.data[0])
						setLoading(false)
					}
				})
			}
		}
	}

	getProducts()

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			{loading ? (
				<View
					style={{
						width: '100%',
						height: '100%',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ActivityIndicator size="large" />
				</View>
			) : (
				<>
					{productResponse ? (
						<ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
							{productResponse.url_imagem && (
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
							)}
							<View style={styles.dataContainer}>
								<View style={styles.TimeLocation}>
									<Text>{address} • 2h </Text>
								</View>
								<View style={styles.NamePrice}>
									<Text style={styles.NamePriceText}>{productResponse.nome}</Text>
									<Text style={styles.NamePriceText}>
										{currencyFormat(productResponse.preco_base)}
									</Text>
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
					) : (
						<View
							style={{
								width: '100%',
								height: '100%',
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 20 }}>Produto não encontado :(</Text>
						</View>
					)}
				</>
			)}
		</View>
	)
}
