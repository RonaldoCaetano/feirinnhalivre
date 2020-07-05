import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: "rgba(150, 150, 150, 0.1)",
    },
    column: {
        flexDirection: "row",
    },
    View: {
        marginLeft: 20,
    },
    LinkName: {
        marginLeft: 10,
        color: "#3B3B3B",
        marginBottom: 5,
    },
    LinkDescription: {
        marginLeft: 10,
        fontSize: 12,
        color: "#009CC6"

    },
})