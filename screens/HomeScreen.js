import * as WebBrowser from 'expo-web-browser';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { MonoText, NeonText } from '../components/StyledText';
import Logo from '../assets/images/tarot-logo.png'
import Background from '../assets/images/phone-back.png'
import { DealScreen, Introduction, PrimaryButton, Title } from '../components'
import Data from "../assets/images/Data"

export default function HomeScreen() {
  const [dealScreen, setDealScreen] = useState(false)
  const [dealtCards, setDealtCards] = useState([])
  const [shuffledCards, setShuffledCards] = useState([])

  useEffect(() => {
    shuffleArray(Data.cards)
  }), [];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        setShuffledCards(array)
    }
  }

  const onDeal = () => {
    if (dealScreen && dealtCards.length < 3) {
      const dealt = [...dealtCards, ...shuffledCards.slice(0,1)]
      const cards = shuffledCards.slice(1)
      setDealtCards(dealt)
      setShuffledCards(cards)
    } else if (dealtCards.length === 3) {
      setDealScreen(false)
      setShuffledCards(shuffleArray(Data.cards))
      setDealtCards([])
    } else {
      setDealScreen(true)
    }
    console.log(shuffledCards)
  }

  return (
    <ImageBackground 
        source={Background}
        style={{width: '100%', height: '100%', backgroundColor: '#000'}} 
    >
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={ Logo }
              style={styles.welcomeImage}
            />
            <Title />
            {!dealScreen && <Introduction />}
            {dealScreen && <DealScreen cards={dealtCards}/>}
            <PrimaryButton  onPress={() => onDeal()}  />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
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
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
