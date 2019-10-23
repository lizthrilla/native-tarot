import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText, NeonText } from '../components/StyledText';
import Logo from '../assets/images/tarot-logo.png'
import Background from '../assets/images/phone-back.png'
import { Introduction, PrimaryButton, Title } from '../components'

export default function HomeScreen() {
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
            <Introduction />
            <PrimaryButton  onPress={() => console.log('Deal card')}  />
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
