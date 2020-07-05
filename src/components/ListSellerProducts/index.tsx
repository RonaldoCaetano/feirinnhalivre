import React from 'react'
import styles from './styles'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import ProductSellerCard from "../ProductSellerCard";

type ListSellerProductsProps = {
    products: any,
}

const { width, height } = Dimensions.get("screen");

const splitArray = (arr: any) => {
    const { length } = arr;
    const half = length / 2;
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(half, length);
    return { firstHalf, secondHalf };
};

const ListSellerProducts = ({ products }: ListSellerProductsProps) => {
    return (

        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 20,
                paddingVertical: 15
            }}
        >
            <View style={styles.container}>
                <View style={styles.column}>
                    {splitArray(products).firstHalf.map((product: any) => (
                        <ProductSellerCard
                            imgSrc={product.uri}
                            price={product.price}
                            name={product.name}
                            navigation={product.name}
                            key={product.name}
                        />
                    ))}
                </View>
                <View>
                    {splitArray(products).secondHalf.map((product: any) => (
                        <ProductSellerCard
                            imgSrc={product.uri}
                            price={product.price}
                            name={product.name}
                            navigation={product.name}
                            key={product.name}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}



export default ListSellerProducts
