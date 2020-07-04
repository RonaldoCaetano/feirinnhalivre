import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 20,
		backgroundColor: '#F9F3EE',
		width: '45%',
	},
	Promo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	PromoText: {
		fontSize: 12,
		color: 'green',
		fontWeight: '400',
	},
	ImageContainer: {
		shadowColor: 'rgba(60, 60, 60, 0.4)',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		borderRadius: 15,
		elevation: 4,
		marginBottom: 15,
		minHeight: 150,
		width: width / 2 - 30,
	},
	NameText: {
		color: '#A9A9B0',
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 15,
	},
	PriceText: {
		fontSize: 20,
		fontWeight: '600',
		marginLeft: 10,
		color: '#3B3B3B',
	},
	Button: {
		height: 30,
		width: 30,
		alignItems: 'center',
		backgroundColor: '#FFA939',
		borderRadius: 15,
		zIndex: 10,
	},
})
