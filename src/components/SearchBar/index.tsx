import React from 'react'
import styles from './styles'
import { View, TextInput, Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

type SearchBarProps = {
    value: any,
    updateValue: any,
    onSubmit: any,
    clearValue: any
}

const SearchBar = ({ onSubmit, value, updateValue, clearValue }: SearchBarProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.SearchIcon}>
                <Ionicons style={styles.Icon}
                    size={28}
                    name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                />
            </View>
            <TextInput style={styles.Input}
                //value={value}
                //onChangeText={updateValue}
                //onSubmitEditing={onSubmit}
                placeholder="Busque o seu produto"
                blurOnSubmit
                returnKeyType="search"
                underlineColorAndroid="white"
            />
            <TouchableOpacity //onPressIn={clearValue}
            >
                <View style={styles.Button}>
                    <Ionicons
                        size={30}
                        name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar
