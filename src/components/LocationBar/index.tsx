import React from 'react'
import styles from './styles'
import { View, Platform, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type LocationBarProps = {
	name: string
	address: string
}

const LocationBar = ({ name, address }: LocationBarProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.LocationIcon}>
				<Ionicons style={styles.Icon} size={28} name={Platform.OS === 'ios' ? 'ios-navigate' : 'md-navigate'} />
			</View>

			<Text style={styles.Input}>
				Enviar para {name} - {address}
			</Text>

			<TouchableOpacity>
				<View style={styles.Button}>
					<Ionicons
						size={30}
						name={Platform.OS === 'ios' ? 'ios-arrow-round-forward' : 'md-arrow-round-forward'}
					/>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default LocationBar
