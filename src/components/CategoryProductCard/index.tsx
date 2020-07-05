import React from 'react'
import styles from './styles'
import { View, Platform, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CategoryProductCard = () => {
	const navigation = useNavigation()

	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => navigation.navigate('AddPhoto', { categorySelected: 'Casa' })} //onPressIn={clearValue}
				>
					<View style={styles.Button}>
						<Ionicons size={60} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
						<Text>Casa</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('AddPhoto', { categorySelected: 'Remédio' })} //onPressIn={clearValue}
				>
					<View style={styles.Button}>
						<Ionicons size={60} name={Platform.OS === 'ios' ? 'ios-medkit' : 'md-medkit'} />
						<Text>Remédio</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('AddPhoto', { categorySelected: 'Alimento' })} //onPressIn={clearValue}
				>
					<View style={styles.Button}>
						<Ionicons size={60} name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'} />
						<Text>Alimento</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('AddPhoto', { categorySelected: 'Celular' })} //onPressIn={clearValue}
				>
					<View style={styles.Button}>
						<Ionicons size={60} name={Platform.OS === 'ios' ? 'ios-phone-portrait' : 'md-phone-portrait'} />
						<Text>Celular</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('AddPhoto')} //onPressIn={clearValue}
				>
					<View style={styles.Button}>
						<Ionicons size={60} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
						<Text>Mais</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

export default CategoryProductCard
