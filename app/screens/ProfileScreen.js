import React from 'react';
import { StyleSheet, ImageBackground, } from 'react-native';
import { Card, } from 'react-native-elements';

function ProfileScreen() {
    return (
        <ImageBackground source={require('../../assets/nobel.jpg')} style={styles.container} blurRadius={10}>
            <Card borderRadius={10} padding={10}>
                <Card.Image source={require('../../assets/nobel.jpg')} style={{ width: 300, height: 550 }} />
                <Card.Title style={{ fontSize: 25, marginTop: 10 }}>Md. Habibur Rahaman Nobel</Card.Title>
                <Card.Title style={{ marginTop: -10 }}>{`Frontend Developer (Web and Mobile)\nhabiburnobel@gmail.com`}</Card.Title>

            </Card>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default ProfileScreen;