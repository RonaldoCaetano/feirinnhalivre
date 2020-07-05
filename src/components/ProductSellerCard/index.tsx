import React from 'react'
import styles from './styles'
import { Text, View, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Platform } from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type ProductCardProps = {
	imgSrc: string
	name: string
	price: string
	navigation: string
}

const { width, height } = Dimensions.get('screen')

const ProductCard = ({ imgSrc, name, price }: ProductCardProps) => {
	const navigation = useNavigation()

	return (
		<TouchableWithoutFeedback onPress={() => navigation.navigate('Produto', { name })}>
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
					<Text style={styles.PriceText}>{price}</Text>
					<TouchableOpacity style={styles.Button}>
						<Ionicons size={25} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.Button}>
						<Ionicons size={30} name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'} />
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ProductCard
