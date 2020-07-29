import React, {useEffect, useState} from 'react'
import {   StyleSheet, Text, View } from 'react-native'


const DealScreen = ({cards}) => {
    console.log(cards)


    return (
        <View style={styles.container}>
            {cards.map((card) => {
                console.log(card)
                return (

            <Text style={styles.instructions}>
                {card.title}
            </Text>
                )

            })}
        </View>
    )
}
export default DealScreen

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