import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#F9F3EE'
    },
    ImageContainer: {
        shadowColor: 'rgba(60, 60, 60, 0.4)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        borderRadius: 15,
        elevation: 4,
        marginBottom: 5,
        minHeight: 150,
        width: "50%",
    },
    ImagePromo: {
        margin: 10,
        height: 100,
        borderRadius: 15,
    },
})
