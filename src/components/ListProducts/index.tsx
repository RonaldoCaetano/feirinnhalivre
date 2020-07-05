import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native'
import ProductCard from '../ProductCard'
import api from './../../api'

interface ListProductsProps {
	city: string
}

interface Products {
	id: number
	nome: string
	descricao: string
	fk_categoria: number
	prod_subcategoria: any
	preco_base: number
	preco: number
	comprimento: number
	altura: number
	largura: number
	fk_vendedor: number
	url_imagem: string
}

const ListProducts = ({ city }: ListProductsProps) => {
	const [products, setProducts] = useState<Products[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	async function getProducts() {
		const { data } = await api.get<Products[]>(`/products?city=${city.toUpperCase()}`)

		if (data?.length) {
			setProducts(data)
			setLoading(false)
		}
	}

	if (!products.length && loading) {
		getProducts()
	}

	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 20,
				paddingVertical: 15,
			}}
		>
			{loading ? (
				<ActivityIndicator size="large" />
			) : products.length ? (
				<View style={styles.container}>
					{products.map((product) => (
						<ProductCard
							imgSrc={product.url_imagem}
							price={product.preco}
							name={product.nome}
							navigation={product.nome}
							key={product.id}
							id={product.id}
						/>
					))}
				</View>
			) : (
				<View>
					<Text>Não encontramos produtos na sua região :(</Text>
				</View>
			)}
		</ScrollView>
	)
}

export default ListProducts
