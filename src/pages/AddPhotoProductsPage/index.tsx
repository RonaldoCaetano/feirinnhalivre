import React, { useEffect, useState, useRef } from 'react'
import { Camera } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons'
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as ImageManipulator from 'expo-image-manipulator'
import AsyncStorage from '@react-native-community/async-storage'

const pictures: string[] = []
const picturesInBase64: any = []

export default function App() {
	const navigation = useNavigation()
	const route = useRoute()
	const [hasPermission, setHasPermission] = useState(null)
	const [camera, setCamera] = useState<boolean>(false)
	const [type, setType] = useState(Camera.Constants.Type.back)
	const camRef = useRef(null)

	async function handleCamera() {
		const { status } = await Camera.requestPermissionsAsync()

		setHasPermission(status === 'granted')

		if (hasPermission) {
			setCamera(!camera)
		}
	}

	async function takePicture() {
		if (camRef) {
			const data = await camRef.current.takePictureAsync()
			pictures.push(data.uri)
		}
	}

	async function save() {
		if (pictures.length) {
			pictures.forEach(async (picture) => {
				const pictureResized = await ImageManipulator.manipulateAsync(
					picture,
					[
						{
							resize: { width: 300, height: 300 },
						},
					],
					{
						compress: 0.2,
						base64: true,
						format: ImageManipulator.SaveFormat.PNG,
					}
				)
				picturesInBase64.push(pictureResized.base64)
			})

			if (picturesInBase64.length) {
				const getSellerProductData = await AsyncStorage.getItem('@sellerProductData')

				if (getSellerProductData) {
					await AsyncStorage.removeItem('@sellerProductData')
				}

				const { categorySelected } = route.params
				await AsyncStorage.setItem('@sellerProductData', JSON.stringify({ picturesInBase64, categorySelected }))

				setCamera(false)
			}
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			{camera ? (
				<View style={{ flex: 1, width: '100%' }}>
					<Camera style={{ flex: 1 }} type={type} ref={camRef}>
						<View
							style={{
								flex: 1,
								backgroundColor: 'transparent',
								flexDirection: 'row',
							}}
						>
							<TouchableOpacity
								style={{
									flex: 0.1,
									alignSelf: 'flex-end',
									alignItems: 'center',
								}}
								onPress={() => {
									setType(
										type === Camera.Constants.Type.back
											? Camera.Constants.Type.front
											: Camera.Constants.Type.back
									)
								}}
							>
								<Text
									style={{
										fontSize: 18,
										marginBottom: 20,
										marginLeft: 20,
										color: 'white',
										width: '100%',
									}}
								>
									{' '}
									Girar{' '}
								</Text>
							</TouchableOpacity>
						</View>
					</Camera>
					<TouchableOpacity style={[styles.button, { flexDirection: 'row' }]} onPress={takePicture}>
						<Text style={{ color: '#fff', marginRight: 20 }}>Capturar Foto</Text>
						<FontAwesome name="camera" size={23} color="#fff" />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, { flexDirection: 'row' }]} onPress={save}>
						<Text style={{ color: '#fff', marginRight: 20 }}>Salvar Foto(s)</Text>
						<FontAwesome name="save" size={23} color="#fff" />
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.ButtonContainer}>
					<Text style={styles.TextAuth}>
						{pictures.length
							? `Voce escolheu ${pictures.length} imagem(ns)`
							: 'Vamos tirar uma foto bem bonita do seu produto:'}
					</Text>
					<TouchableOpacity style={styles.ButtonAdvance}>
						<Text style={styles.Text}>ESCOLHER FOTO</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ButtonAdvance} onPress={handleCamera}>
						<Text style={styles.Text}>TIRAR FOTO</Text>
					</TouchableOpacity>
					<Image style={styles.melinho} source={require('../../../assets/images/nopicture.png')} />

					<TouchableOpacity style={styles.ButtonAdvance} onPress={() => navigation.navigate('NovoProduto')}>
						<Text style={styles.Text}>AVANÇAR</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	)
}
