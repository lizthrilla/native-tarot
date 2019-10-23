import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const PrimaryButton = ({ onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.dealButton}
            onPress={onPress}
        >
            <Text>Deal</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    dealButton: {
        alignItems: 'center',
        backgroundColor: '#00c9ff',
        color: '#fff',
        flex: 1,
        height: 50,
        justifyContent: 'center',
        width: 100,
        borderRadius: 10
    },
})