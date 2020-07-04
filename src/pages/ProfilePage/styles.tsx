import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: "#F9F3EE",
        flex: 1,
    },
    profileHeader: {
        shadowColor: "rgba(60, 60, 60, 0.1)",
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 5 },
        elevation: 4,
        backgroundColor: "#FFA939",
        paddingVertical: 30,
        paddingHorizontal: 20,
        paddingTop: 65,
        alignItems: "center",
        width: "100%",
    },
    avatarcontainer: {
        marginBottom: 20,
    },
    name: {
        fontWeight: "600",
        color: "#3B3B3B",
        fontSize: 24,
        marginBottom: 5,
    },
    bio: {
        marginBottom: 20,
        color: "#F9F3EE",
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#F9F3EE",
        marginBottom: 30,
    },
    dataContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },
    dataPointContainer: {
        alignItems: "center",
        width: "33%",
        justifyContent: "center",
    },
    datapointnumber: {
        color: "#3B3B3B",
        marginBottom: 3.5,
        alignItems: "center",
    },
    datapointName: {
        color: "#F9F3EE",
        fontSize: 12,

    },



})