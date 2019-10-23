import React from 'react'
import { StyleSheet } from 'react-native'
import { NeonText } from '../components/StyledText'

const Title = () => {
    return (
        <NeonText style={styles.title}>Tarot with Sybill</NeonText>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        color: '#00c9ff',
        fontSize: 35,
        fontWeight: '900',
    }
})