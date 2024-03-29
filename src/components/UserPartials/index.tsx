import React from 'react'
import styles from './styles'
import { Image, View, Text, TouchableOpacity, Linking } from 'react-native'
import Avatar from '../Avatar'
import { useNavigation } from '@react-navigation/native'

type UserPartialsProps = {
	avatarUrl: any
	name: any
	rating: any
}

const UserPartials = ({ avatarUrl, name, rating }: UserPartialsProps) => {
	const navigation = useNavigation()

	function sendMessage() {
		Linking.openURL(`whatsapp://send?phone=5511954769550&text=Olá, tudo bem? Tenho interesse no seu produto :)`)
	}

	return (
		<View style={styles.container}>
			<View style={styles.column}>
				<Avatar source={avatarUrl} />
				<View style={styles.datacontainer}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.rating}>{`⭑ ${rating}`}</Text>
				</View>
			</View>
			<View style={styles.column}>
				<View style={styles.firstButtonContainer}>
					<TouchableOpacity style={styles.ButtonMsg} onPress={sendMessage}>
						<Text style={styles.ButtonText}>Mensagem</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.ButtonBuy} onPress={() => navigation.navigate('Carrinho')}>
					<Text style={styles.ButtonText}>Comprar</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default UserPartials
