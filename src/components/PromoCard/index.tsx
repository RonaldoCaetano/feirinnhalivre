import React from 'react'
import styles from './styles'
import { Text, View, TouchableWithoutFeedback, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'

const PromoCard = () => {
    return (
        <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.ImageContainer}>
                    <Image style={styles.ImagePromo} source={require('../../../assets/images/mercadopago.png')}
                    />
                </View>

                <View style={styles.ImageContainer}>
                    <Image style={styles.ImagePromo} source={require('../../../assets/images/mercadopago.png')}
                    />
                </View>


            </ScrollView>
        </View>
    )
}

export default PromoCard
