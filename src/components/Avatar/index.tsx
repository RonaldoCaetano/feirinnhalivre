import React from 'react'
import styles from './styles'
import { Image } from 'react-native'

type AvatarProps = {
    source: any,
}

const Avatar = ({ source }: AvatarProps) => {
    return (
        <Image style={styles.Image} source={source} resizeMode="cover" />
    )
}

export default Avatar
