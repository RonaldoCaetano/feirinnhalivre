import React, { useState } from 'react'
import { Platform } from 'react-native'
import { View, Text, ScrollView } from 'react-native'
import Avatar from '../../components/Avatar'
import ProfileLink from '../../components/ProfileLink'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.profileHeader}>
				<View style={styles.avatarcontainer}>
					<Avatar source={require('../../../assets/images/lgAvatar.png')} />
				</View>
				<Text style={styles.name}>João Marcos</Text>
				<Text style={styles.bio}>Básico</Text>
				<View style={styles.divider} />
				<View style={styles.dataContainer}>
					<View style={styles.dataPointContainer}>
						<Text style={styles.datapointnumber}>425</Text>
						<Text style={styles.datapointName}>Vendas</Text>
					</View>
					<View>
						<Text style={styles.datapointnumber}>4.5</Text>
						<Text style={styles.datapointName}>Avaliação</Text>
					</View>
					<View>
						<Text style={styles.datapointnumber}>20m</Text>
						<Text style={styles.datapointName}>Tempo Resposta</Text>
					</View>
				</View>
			</View>
			<ScrollView
				contentContainerStyle={{
					paddingTop: 10,
					paddingHorizontal: 20,
				}}
			>
				<ProfileLink
					rota="Perfil"
					name="Meus negócios"
					description="Veja o seu histórico de compras e vendas"
					iconName={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
				/>
				<ProfileLink
					rota="Perfil"
					name="Carteira"
					description="Aproveite as vantagens do Mercado Pago"
					iconName={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
				/>
				<ProfileLink
					rota="DocumentoVendedor"
					name="Vender Produtos"
					description="Adicione de forma simples seus produtos para venda"
					iconName={Platform.OS === 'ios' ? 'ios-cube' : 'md-cube'}
				/>
				<ProfileLink
					rota="Perfil"
					name="Meu Perfil"
					description="Edite as informações do seu perfil"
					iconName={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
				/>
				<ProfileLink
					rota="Perfil"
					name="Fale com o Melinho"
					description="Entre em contato com nosso assistente virtual"
					iconName={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
				/>
				<ProfileLink
					rota="Sair"
					name="Deslogar e Fechar o Aplicativo"
					description="Você pode voltar quando quiser :)"
					iconName={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'}
				/>
			</ScrollView>
		</View>
	)
}
