import React from 'react'
import styles from './styles'
import { Text, View, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Platform } from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import { Ionicons } from '@expo/vector-icons'

type ProductCardProps = {
	imgSrc: string
	name: string
	price: string
	navigation: string
}

const { width, height } = Dimensions.get('screen')

const ProductCard = ({ imgSrc, name, price, navigation }: ProductCardProps) => {
	return (
		<TouchableWithoutFeedback>
			<View style={styles.container}>
				<View style={styles.ImageContainer}>
					<AutoHeightImage
						width={width / 2 - 30}
						source={{ uri: imgSrc }}
						style={{
							borderRadius: 15,
						}}
					/>
				</View>
				<Text style={styles.NameText}>{name}</Text>
				<View style={styles.Promo}>
					<Text style={styles.PriceText}>{`R$ ${price}`}</Text>
					<Text style={styles.PromoText}>10% OFF</Text>
					<TouchableOpacity style={styles.Button}>
						<Ionicons size={30} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} />
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ProductCard
