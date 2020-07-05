import React from 'react'
import styles from './styles'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import ProductCartCard from '../ProductCartCard'

type ListCartProductsProps = {
	products: any
}

const { width, height } = Dimensions.get('screen')

const splitArray = (arr: any) => {
	const { length } = arr
	const half = length / 2
	const firstHalf = arr.slice(0, half)
	const secondHalf = arr.slice(half, length)
	return { firstHalf, secondHalf }
}

const ListCartProducts = ({ products }: ListCartProductsProps) => {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 20,
				paddingVertical: 15,
			}}
		>
			<View style={styles.container}>
				<View style={styles.column}>
					{products.map((product: any) => (
						<ProductCartCard
							imgSrc={product.uri}
							price={product.price}
							name={product.name}
							navigation={product.name}
							key={product.name}
						/>
					))}
				</View>
				<View></View>
			</View>
		</ScrollView>
	)
}

export default ListCartProducts
