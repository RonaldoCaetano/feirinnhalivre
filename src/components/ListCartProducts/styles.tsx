import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        justifyContent: "space-between",
    },
    column: {
        margin: 10,
    },
})
