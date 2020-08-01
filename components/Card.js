import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const Card = ({fortune, description, image, title}) => {
    const [readInformation, setReadInformation] = useState(false)

    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => setReadInformation(!readInformation)}>
                <View style={styles.textBox}>
                    <Text style={[styles.text, {fontFamily: 'Caudex_400Regular'}, {fontWeight: 'bold'}]}>{title}</Text>
                    <Text style={[styles.text, {fontFamily: 'Caudex_400Regular'}]}>{description}</Text>
                    <Text style={[styles.text, {fontFamily: 'Caudex_400Regular'}]}>{fortune}</Text>
                </View>
                <Image source={image} style={readInformation ? styles.cardOverlay : styles.cardImage}/>
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        margin: '1rem'
    },
    card: {
        height: '25rem',
        width: '15rem',
        borderRadius: 10,
        backgroundColor: "#000",
        position: 'relative'
    },
    cardImage: {
        height: '100%',
        borderRadius: 10,
        borderWidth: '1px',
        borderColor: "#fff"
    },
    cardOverlay: {
        height: '25rem',
        width: '15rem',
        opacity: 0.1,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: '1px',
        borderColor: "#fff",
    },
    textBox: {
        height: '25rem',
        width: '15rem',
        position: 'absolute',
        padding: "0.5rem",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        marginBottom: '0.5rem',
        fontSize: '1rem'
    }
})