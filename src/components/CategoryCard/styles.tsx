import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F9F3EE",
        justifyContent: "space-between",
        paddingTop: 5,
        height: 100,
    },
    Button: {
        marginLeft: 15,
        height: 60,
        width: 60,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 30,
        zIndex: 10,
    },
})
