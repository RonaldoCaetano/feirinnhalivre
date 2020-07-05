import React, { useState } from 'react'
import { StatusBar, Text, View, Image } from "react-native";
import styles from './styles'

export default function App() {
    return (
        <View style={styles.container}>

            <StatusBar barStyle="light-content" />

            <View style={styles.ButtonContainer}>

                <Text style={styles.TextAuth}>Você não tem favoritos ainda</Text>

                <Image style={styles.melinho} source={require('../../../assets/images/favorite.png')} />

            </View>
        </View>
    )
}