import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    image: {
        width: width,
        height: height / 2.3,
        position: "relative",
    },
    dataContainer: {
        paddingHorizontal: 20,
    },
    TimeLocation: {
        color: "black",
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 10,
    },
    NamePrice: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    NamePriceText: {
        fontSize: 24,
        color: "black",
        fontWeight: "600",
    },
    NamePromoText: {
        fontSize: 16,
        color: "green",
        fontWeight: "400",
    },
    divider: {
        width: "100%",
        height: 2,
        backgroundColor: "rgba(151, 151, 151, 0.1)",
        marginBottom: 25,
    },
    description: {
        marginBottom: 25,
        color: "black",
    },
    readmore: {
        color: "black",
        marginBottom: 40,
    },
    user: {
        marginBottom: 20,
    },

})