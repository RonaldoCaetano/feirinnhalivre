import React, { useState } from 'react'
import { StatusBar, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './styles'
import UserPartials from '../../components/UserPartials'

const { width, height } = Dimensions.get('screen')

export default function App() {
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
							uri: 'https://i.pinimg.com/564x/8f/27/44/8f27446e4f69541cb465e50b93dae15e.jpg',
						}}
					/>
					<Image
						style={styles.image}
						source={{
							uri: 'https://i.pinimg.com/564x/6e/90/41/6e90412772257e9d16b18f6449d0b141.jpg',
						}}
					/>
					<Image
						style={styles.image}
						source={{
							uri: 'https://i.pinimg.com/564x/48/8a/ce/488acec32b6c8cf86fc034476b17b2bc.jpg',
						}}
					/>
				</Swiper>
				<View style={styles.dataContainer}>
					<View style={styles.TimeLocation}>
						<Text>Rua Antônio Hércules, 66, Itatiba, SP • 2h </Text>
					</View>
					<View style={styles.NamePrice}>
						<Text style={styles.NamePriceText}>Xaomi Redmi 2</Text>
						<Text style={styles.NamePriceText}>R$ 49</Text>
						<Text style={styles.NamePromoText}>10% OFF</Text>
					</View>
					<View style={styles.divider} />

					<Text style={styles.description}>
						Selling my 2017 DJI Spark. Barely used, pretty new in condition and its the “Fly More Combo". No
						Negotiations please.
					</Text>
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
