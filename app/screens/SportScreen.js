import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import { Card, Text, } from 'react-native-elements';
import Icon from '../components/Icon';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

function SportScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>


            <ImageBackground source={require('../../assets/nobel.jpg')} style={styles.container} blurRadius={7} >
                <Icon
                    action={() => navigation.goBack()}
                    name="md-return-up-back-outline"
                    color="white"
                    size={35}
                    iconStyle={{
                        paddingLeft: 15,
                        marginTop: 10,
                        width: 70,
                        borderRadius: 50,
                        marginLeft: 15
                    }}
                />
                <View style={styles.imageBackground}>
                    <Image source={require('../../assets/nobel.jpg')} style={styles.Mainimage} />

                </View>

            </ImageBackground>


            <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                <View style={styles.card}>
                    <Card borderRadius={10} >
                        <Image source={require('../../assets/fifa.png')} style={styles.image} />

                        <Text style={styles.holidayTitle}>FIFA 20 Tournament</Text>

                    </Card>
                </View>

                <View style={styles.card}>
                    <Card borderRadius={10} >
                        <Image source={require('../../assets/fifa.png')} style={styles.image} />
                        <Text style={styles.holidayTitle}>FIFA 20 Tournament</Text>
                    </Card>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                <View style={styles.card}>
                    <Card borderRadius={10} >
                        <Image source={require('../../assets/fifa.png')} style={styles.image} />

                        <Text style={styles.holidayTitle}>FIFA 20 Tournament</Text>

                    </Card>
                </View>

                <View style={styles.card}>
                    <Card borderRadius={10} >
                        <Image source={require('../../assets/fifa.png')} style={styles.image} />
                        <Text style={styles.holidayTitle}>FIFA 20 Tournament</Text>
                    </Card>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    image: {
        width: '100%',
        height: 100,
        alignSelf: 'center'
    },

    holidayTitle: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15,
        textAlign: 'center',

    },
    card: {
        width: '50%',

    },
    container: {

        width: '100%',
        height: 400,
        aspectRatio: 1.1,

    },
    imageBackground: { backgroundColor: 'white', width: 225, height: 225, left: '20%', top: '5%', borderRadius: 125 },
    Mainimage: { width: 200, height: 200, borderRadius: 100, alignSelf: 'center', top: '5%' },
})

export default SportScreen;