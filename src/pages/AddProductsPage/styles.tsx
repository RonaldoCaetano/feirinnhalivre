import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: "#F9F3EE",
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    melinho: {
        resizeMode: "contain",
        width: "100%",
        height: 250,
    },
    ButtonContainer: {
        margin: 25,
        justifyContent: 'flex-end',
        flex: 1,
        width: "95%",
    },
    TextAuth: {
        flexWrap: "wrap",
        color: "#FFA939",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 25,
        fontSize: 18,
    },
    AuthInput: {
        width: "100%",
        paddingTop: 15,
        paddingRight: 20,
        borderColor: "#FFA939",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 30,
        color: "white",
        marginBottom: 20,
    },
    AuthTextView: {
        justifyContent: 'center',
        flexDirection: "row",
        fontSize: 18,
        marginStart: 20,
        marginBottom: 10,
    },
    Text: {
        fontSize: 18,
        color: "white",
    },
    AuthView: {
        alignItems: "center",
        width: "100%",
    },
    ButtonAdvance: {
        width: "100%",
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 50,
        paddingLeft: 50,
        marginBottom: 10,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#009CC6",
    },
})