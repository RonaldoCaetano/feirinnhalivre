import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFA939",
        paddingTop: 5,
    },
    Input: {
        borderRadius: 18,
        paddingHorizontal: 15,
        width: "80%",
        marginLeft: 5,
        marginRight: 10,
        height: 40,
    },
    Button: {
        height: 30,
        width: 30,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        zIndex: 10,
    },
    LocationIcon: {
        height: 30,
        width: 30,
        alignItems: "center",
    },
    Icon: {
        color: "white",
    },
})
