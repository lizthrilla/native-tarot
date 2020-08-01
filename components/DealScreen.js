import React, {useEffect, useState} from 'react'
import {   StyleSheet, Text, View } from 'react-native'
import Card from "./Card"


const DealScreen = ({cards}) => {
    return (
        <View style={styles.container}>
            {cards.map((card, i) => {
                return (
                    <Card key={i} title={card.title} image={card.image} description={card.description} fortune={card.fortune}/>
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
})