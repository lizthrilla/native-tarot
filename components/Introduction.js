import React from 'react'
import {   StyleSheet,Text, View } from 'react-native'

const Introduction = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Welcome to my online reading room. I am Sybil, Seer and high Priestess of Seidr-the ancient Norse magick religion. I am a descendant of Freja, Goddess of beauty, love, war, and death, leader of the Valkyries. I was born with the gift of prophecy and magick.
            </Text>
            <Text style={styles.instructions}>
                Before dealing the cards, relax and open your mind to your inner energy.  Carefully consider your question; as you look at your cards, study the image as well as the prophecy. What message does the image give you? Write down your question and result to contemplate later.
            </Text>
            <Text style={styles.instructions}>
                Simply click the cards to see what they have to say.
            </Text>
        </View>
    )
}

export default Introduction

const styles=({
    container: {
        flex: 1,
    },
    welcomeText: {
        color: '#fff',
        margin: 20,
        fontSize: 17,
    },
    instructions: {
        color: '#fff',
        margin: 10,
        marginLeft: 15,
        marginRight: 20,
        fontSize: 17,
    },
})