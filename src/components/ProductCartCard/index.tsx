import React from 'react'
import styles from './styles'
import { Text, View, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Platform } from 'react-native'
import AutoHeightImage from "react-native-auto-height-image";
import { Ionicons } from "@expo/vector-icons";

type ProductCartCardProps = {
    imgSrc: string,
    name: string,
    price: string,
    navigation: string
}

const { width, height } = Dimensions.get("screen");

const ProductCartCard = ({ imgSrc, name, price, navigation }: ProductCartCardProps) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.ImageContainer}>
                        <AutoHeightImage
                            width={width / 4 - 30}
                            source={{ uri: imgSrc }}
                            style={{
                                borderRadius: 15
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.NameText}>{name}</Text>
                        <View style={styles.Promo}>
                            <Text style={styles.PriceText}>{`R$ ${price}`}</Text>
                            <Text style={styles.PromoText}>10% OFF</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Promo}>
                    <TouchableOpacity style={styles.Button}><Ionicons
                        size={30}
                        name={Platform.OS === "ios" ? "ios-remove" : "md-remove"}
                    /></TouchableOpacity>
                    <Text style={styles.PromoText}>1</Text>
                    <TouchableOpacity style={styles.Button}><Ionicons

                        size={30}
                        name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                    /></TouchableOpacity>
                </View>
                <View style={styles.divider} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCartCard
