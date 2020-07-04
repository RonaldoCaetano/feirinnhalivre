import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import ProductCard from '../ProductCard'
import api from './../../api'

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
}

const ListProducts = () => {
	const [products, setProducts] = useState<Products[]>([])

	useEffect(() => {
		api.get<Products[]>('/products').then((productsResponse) => {
			if (productsResponse?.data?.length) {
				const { data: productsData } = productsResponse
				setProducts(productsData)
			}
		})
	}, [])

	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 20,
				paddingVertical: 15,
			}}
		>
			<View style={styles.container}>
				<View style={styles.column}>
					{products.map((product) => (
						<ProductCard
							imgSrc={'teste.png'}
							price={product.preco}
							name={product.nome}
							navigation={product.nome}
							key={product.id}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

export default ListProducts
