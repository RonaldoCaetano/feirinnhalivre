import React, { useState } from 'react'
import { Platform } from "react-native";
import { View, Text, ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import ShippingLink from "../../components/ShippingLink";
import { Ionicons } from "@expo/vector-icons";
import styles from './styles'

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarcontainer}>
                    <Avatar
                        source={require("../../../assets/images/shipping.png")}
                    />
                </View>
                <Text style={styles.name}>Selecione o metódo de entrega:</Text>
                <View style={styles.divider} />
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 10,
                    paddingHorizontal: 20
                }}
            >
                <ShippingLink
                    name="RETIRADA NO LOCAL"
                    description="Retire na loja no esquema Drive-Thru"
                    iconName={Platform.OS === "ios" ? "ios-car" : "md-car"}
                />
                <ShippingLink
                    name="ENTREGA GRATUITA"
                    description="Esse estabelecimento entrega em 24h"
                    iconName={Platform.OS === "ios" ? "ios-clock" : "md-clock"}
                />
            </ScrollView>
            <View style={styles.SearchBar}>

                <Text style={styles.TextTotal}>Total: R$ 10,00</Text>

            </View>
        </View>
    )
}