import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const PrimaryButton = ({ onPress, buttonText }) => {
    return (
        <TouchableOpacity 
            style={styles.dealButton}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, {fontWeight: '900'}]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    dealButton: {
        alignItems: 'center',
        backgroundColor: '#00c9ff',
        // marginTop: '2rem',
        height: 50,
        justifyContent: 'center',
        width: 100,
        borderRadius: 10,
    },
    buttonText: {
        color: "#171F33",
        fontWeight: '900',
        textTransform: 'uppercase',
    }
})