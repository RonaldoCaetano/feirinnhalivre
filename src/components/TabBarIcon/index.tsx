import React from 'react'
import styles from './styles'
import { View, TextInput, Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

type TabBarIconProps = {
    name: any,
    focused: any,
}

const TabBarIcon = ({ name, focused }: TabBarIconProps) => {
    return (
        <Ionicons
            name={name}
            size={22}
            style={styles.Icon}
            color={focused ? "#C4C4C4" : "#118DF0"}
        />
    )
}

export default TabBarIcon
