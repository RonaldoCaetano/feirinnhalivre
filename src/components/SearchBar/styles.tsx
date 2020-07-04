import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFA939",
        paddingTop: 20,
    },
    Input: {
        backgroundColor: '#FFF',
        borderRadius: 18,
        paddingHorizontal: 15,
        width: "80%",
        marginLeft: 10,
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
    SearchIcon: {
        height: 30,
        width: 30,
        alignItems: "center",
    },
    Icon: {
        color: "white",
    },
})
