import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import homeBackgroundImage from '../../assets/home.jpeg';
import { navigate } from '../NavigationRoot';

const HomeScreen = props => {
    return (


        <ImageBackground
            source={homeBackgroundImage}
            style={{ width: "100%", flex: 1 }}
        >
            <Text style={styles.quote}>Life is Like a Box of Chocolates!</Text>
            <Text style={styles.quote}>You Never Know What You are Gonna GET!</Text>

            <View style={styles.loginView}>
                <TouchableOpacity style={styles.btnContainer}
                    onPress={() => {
                        navigate('Profile')
                    }}>
                    <Text style={styles.btnStyle}>Let's Get Start IT!</Text>


                </TouchableOpacity>
            </View>

        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    loginView: {
        top: '25%',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center",

    },
    btnContainer: {
        flexDirection: "row",
        width: 250,
        paddingVertical: 10,
        backgroundColor: "#009688",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: 'white',

    },
    quote: {
        top: '10%',

        textAlign: 'center',


        color: 'white',

        fontSize: 50,
        fontWeight: 'bold',
        width: 400,
        alignSelf: "center",
    }
})
export default HomeScreen;
