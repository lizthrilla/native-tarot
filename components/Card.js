import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const Card = ({fortune, description, image, title}) => {
    const [readInformation, setReadInformation] = useState(false)

    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => setReadInformation(!readInformation)}>
                <View style={readInformation ? styles.textBox : styles.hiddenTextBox}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.text}>{description}</Text>
                    <Text style={styles.text}>{fortune}</Text>
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
        // height: '100%',
        margin: 10
    },
    card: {
        height: 385,
        width: 225,
        borderRadius: 10,
        backgroundColor: "#000",
        position: 'relative'
    },
    cardImage: {
        height: 385,
        width: 225,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff"
    },
    cardOverlay: {
        height: 385,
        width: 225,
        opacity: 0.1,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
    },
    textBox: {
        height: 385,
        width: 225,
        position: 'absolute',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 10,
    },
    hiddenTextBox: {
        display: 'none'
    },
    text: {
        color: '#fff',
        marginBottom: 15,
        fontSize: 15
    }
})