import React, { useState } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from './styles'

export default function App() {
    return (
        <View style={styles.container}>

            <StatusBar barStyle="light-content" />

            <View style={styles.ButtonContainer}>

                <Image style={styles.melinho} source={require('../../../assets/images/MelinhoAuth.png')} />

                <Text style={styles.TextAuth}>Vamos vender juntos! Para começar a vender na Feirinha basta informar o seu documento! Ex: CPF ou CNPJ</Text>

                <KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
                    <View style={styles.AuthInput}>
                        <TextInput style={styles.AuthTextView}
                            placeholder="Coloque o CPF ou CNPJ aqui"
                            keyboardType="default"
                        />
                    </View>

                    <TouchableOpacity style={styles.ButtonAdvance}>
                        <Text style={styles.Text}>AVANÇAR</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </View>
        </View>
    )
}