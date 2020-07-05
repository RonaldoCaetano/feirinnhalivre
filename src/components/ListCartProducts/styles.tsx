import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		marginTop: 40,
	},
	column: {
		margin: 10,
	},
})
