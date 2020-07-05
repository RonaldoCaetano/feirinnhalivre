import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import styles from './styles'
import { Image, View, Text, TouchableOpacity, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as firebase from 'firebase'
import AsyncStorage from '@react-native-community/async-storage'

type ProfileLinkProps = {
	iconName: any
	name: any
	description: any
	rota: any
}

const ICON_SIZE = Platform.OS === 'ios' ? 26 : 20

const ProfileLink = ({ iconName, name, description, rota }: ProfileLinkProps) => {
	const navigation = useNavigation()

	async function handleOptionClick() {
		if (rota === 'Sair') {
			firebase.auth().signOut()
			await AsyncStorage.removeItem('@userLogged')
			BackHandler.exitApp()
		} else {
			navigation.navigate(rota)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.column}>
				<View>
					<Ionicons name={iconName} size={ICON_SIZE} color={'#70CDE5'} />
				</View>
				<TouchableOpacity onPress={handleOptionClick}>
					<Text style={styles.LinkName}>{name}</Text>
					<Text style={styles.LinkDescription}>{description}</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={handleOptionClick}>
				<Ionicons
					name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
					size={ICON_SIZE}
					color={'#009CC6'}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default ProfileLink
