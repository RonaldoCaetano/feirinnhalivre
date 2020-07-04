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

                <Text style={styles.TextAuth}>Olá! Eu sou o Melinho oLIVREira! Te mandei uma mensagem com um número de autenticação, por favor coloque o número aqui para completar seu cadastro</Text>

                <KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
                    <View style={styles.AuthInput}>
                        <TextInput style={styles.AuthTextView}
                            placeholder="Coloque o número aqui"
                            keyboardType="number-pad"
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