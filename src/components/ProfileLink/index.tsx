import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import styles from './styles'
import { Image, View, Text, TouchableOpacity } from 'react-native'

type ProfileLinkProps = {
    iconName: any,
    name: any,
    description: any,
}

const ICON_SIZE = Platform.OS === "ios" ? 26 : 20;

const ProfileLink = ({ iconName, name, description }: ProfileLinkProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <View>
                    <Ionicons name={iconName} size={ICON_SIZE} color={"#70CDE5"} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.LinkName}>{name}</Text>
                    <Text style={styles.LinkDescription}>{description}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Ionicons
                    name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
                    size={ICON_SIZE}
                    color={"#009CC6"}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileLink
