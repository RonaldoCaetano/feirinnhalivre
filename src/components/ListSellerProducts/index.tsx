import React, { useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Dimensions, ActivityIndicator, Alert } from 'react-native'
import ProductSellerCard from '../ProductSellerCard'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../api'
import currencyFormat from '../../utils/formatPrice'

const ListSellerProducts = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [products, setProducts] = useState<any>([])

	async function getProducts() {
		if (loading && !products.length) {
			const getStorage = await AsyncStorage.getItem('@userLogged')

			if (getStorage) {
				const { phone } = JSON.parse(getStorage)

				api.get(`/products?sellerPhone=${phone}`)
					.then(({ data }) => {
						if (data?.length) {
							setProducts(data)
						}
						setLoading(false)
					})
					.catch((error) => {
						// console.error(error)
						Alert.alert('Estamos passando por alguns problemas, tente novamente mais tarde')
					})
			}
		}
	}

	getProducts()

	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 20,
				paddingVertical: 15,
			}}
		>
			<View style={styles.container}>
				{loading ? (
					<ActivityIndicator size="large" />
				) : (
					<View style={styles.column}>
						{products.length ? (
							<>
								{products.map((product) => (
									<ProductSellerCard
										imgSrc={product.url_imagem}
										price={currencyFormat(product.preco_base)}
										name={product.nome}
										navigation={product.nome}
										key={product.id}
									/>
								))}
							</>
						) : (
							<Text>Vamos lá, cadastre o seu primeiro produto :)</Text>
						)}
					</View>
				)}
			</View>
		</ScrollView>
	)
}

export default ListSellerProducts
