import React from 'react'
import styles from './styles'
import { View, TextInput, Platform, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

type CategoryCardProps = {
    navigation: any,
}

const CategoryCard = ({ navigation }: CategoryCardProps) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.container}>
                <TouchableOpacity //onPressIn={clearValue}
                >
                    <View style={styles.Button}>
                        <Ionicons
                            size={60}
                            name={Platform.OS === "ios" ? "ios-qr-scanner" : "md-qr-scanner"}
                        />
                        <Text>Qr Code</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity //onPressIn={clearValue}
                >
                    <View style={styles.Button}>
                        <Ionicons
                            size={60}
                            name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
                        />
                        <Text>Ofertas</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity //onPressIn={clearValue}
                >
                    <View style={styles.Button}>
                        <Ionicons
                            size={60}
                            name={Platform.OS === "ios" ? "ios-restaurant" : "md-restaurant"}
                        />
                        <Text>Alimento</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity //onPressIn={clearValue}
                >
                    <View style={styles.Button}>
                        <Ionicons
                            size={60}
                            name={Platform.OS === "ios" ? "ios-phone-portrait" : "md-phone-portrait"}
                        />
                        <Text>Celular</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity //onPressIn={clearValue}
                >
                    <View style={styles.Button}>
                        <Ionicons
                            size={60}
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                        />
                        <Text>Mais</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CategoryCard
