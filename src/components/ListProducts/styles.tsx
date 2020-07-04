import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    column: {
        margin: 10,
    },
})
