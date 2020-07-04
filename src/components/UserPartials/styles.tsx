import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    datacontainer: {
        marginLeft: 10,
    },
    name: {
        fontWeight: "500",
        fontSize: 16,
    },
    rating: {
        color: "black",
    },
    firstButtonContainer: {
        marginRight: "2.5%",
    },
    ButtonMsg: {
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#009CC6",
    },
    ButtonBuy: {
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#0cbc50",
    },
    ButtonText: {
        fontWeight: "500",
        fontSize: 16,
        color: "white",
    },

})