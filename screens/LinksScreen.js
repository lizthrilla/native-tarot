import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

export default function LinksScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Denise Fagerberg Tiller</Text>
            <Text style={styles.text}>Denise's fascination with the bizarre stems from her earliest memory. At 2
                years old, her parents took her up the creaky steps into the attic of her
                grandmother's house one night, which was filled with women's heads. Denise never
                shared this memory until she was an adult and realized Grandma wasn't a serial
                killer. She owned a beauty shop and those were wig mannequins.
            </Text>
            <Text style={styles.text}>
                Denise is a graduate of the University of Nebraska and holds a black belt in
                Mathematics as a Fellow of the Society of Actuaries. She co-authored the
                actuarial best-seller,
                <a href='https://www.actexmadriver.com/product.aspx?id=453086447'>
                    <em>Life, Health and Annuity Reinsurance</em>
                </a>, now in it's fourth edition. In 1999, her novel,
                <a
                    href='https://www.amazon.com/Calculated-Risk/dp/B0001A0X42/ref=sr_1_1?ie=UTF8&qid=1486567693&sr=8-1&keywords=calculated+risk+denise+tiller'>
                    <em>Calculated Risk</em>
                </a>won the greater dallas Writer's Association's Most Publishable Novel, the
                Millard Lampell Award, the Betty Heinrich's Award, and the CNW/FFWA Florida
                State Novel Chapter and Best in Fiction Division. Timberwolf Press published
                Calculated Risk in 2000 and the audio version was a finalist for the 2001 Violet
                Crow Audio Book award given by the Texas Writers League.
            </Text>
            <Text style={styles.text}>Denise currently resides in Florida with her husband, 2 dogs, 2 cats, and
                a rotating stable of visiting daughters, son-in-laws and grandchildren.</Text>
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: 'About the Author',
    headerStyle: {backgroundColor: '#171F33'},
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#000'
    },
    header: {
      color: '#fff',
      margin: '1rem',
      fontSize: 15
    },
    text: {
      color: "#fff",
      margin: '1rem',
      fontSize: 15
    }
});
