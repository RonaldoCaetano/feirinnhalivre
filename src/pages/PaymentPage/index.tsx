import React, { useState } from 'react'
import { Platform } from 'react-native'
import { View, Text, ScrollView } from 'react-native'
import Avatar from '../../components/Avatar'
import PaymentLink from '../../components/PaymentLink'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.profileHeader}>
				<View style={styles.avatarcontainer}>
					<Avatar source={require('../../../assets/images/payment.png')} />
				</View>
				<Text style={styles.name}>Selecione o metódo de pagamento:</Text>
				<View style={styles.divider} />
			</View>
			<ScrollView
				contentContainerStyle={{
					paddingTop: 10,
					paddingHorizontal: 20,
				}}
			>
				<PaymentLink
					name="MERCADO PAGO"
					description="Use o seu MASTERCARD final 5500..."
					iconName={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
				/>
				<PaymentLink
					name="link"
					description="O Vendedor mandará um link no seu Whatsapp"
					iconName={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
				/>
				<PaymentLink
					name="Boleto"
					description="Receba o seu boleto no Whatsapp"
					iconName={Platform.OS === 'ios' ? 'ios-document' : 'md-document'}
				/>
				<PaymentLink
					name="Pague na Retirada"
					description="Pague no drive-thru de retirada"
					iconName={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
				/>
			</ScrollView>
			<View style={styles.SearchBar}>
				<Text style={styles.TextTotal}>Total: R$ 10,00</Text>
			</View>
		</View>
	)
}
