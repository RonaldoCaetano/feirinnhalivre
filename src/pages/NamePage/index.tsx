import React, { useState } from 'react'
import { StatusBar, TextInput, KeyboardAvoidingView, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from './styles'

export default function App() {
    return (
        <View style={styles.container}>

            <StatusBar barStyle="light-content" />

            <View style={styles.ButtonContainer}>

                <Image style={styles.melinho} source={require('../../../assets/images/MelinhoName.png')} />

                <Text style={styles.TextAuth}>Falta só a gente se conhecer! Conta seu nome e começe agora mesmo a sua Feirinha</Text>

                <KeyboardAvoidingView style={styles.AuthView} behavior="padding" enabled>
                    <View style={styles.AuthInput}>
                        <TextInput style={styles.AuthTextView}
                            placeholder="Coloque o seu nome aqui"
                            keyboardType="default"
                        />
                    </View>

                    <TouchableOpacity style={styles.ButtonAdvance}>
                        <Text style={styles.Text}>FINALIZAR</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </View>
        </View>
    )
}