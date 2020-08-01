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
            <Text style={[styles.buttonText, {fontFamily: 'Caudex_700Bold'}]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    dealButton: {
        alignItems: 'center',
        backgroundColor: '#00c9ff',
        marginTop: '2rem',
        height: 50,
        justifyContent: 'center',
        width: 100,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: '800',
        textTransform: 'uppercase',
        fontFamiy: 'Caudex_700Bold'
    }
})