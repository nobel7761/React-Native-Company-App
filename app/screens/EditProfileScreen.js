import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import Icon from '../components/Icon';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


function EditProfileScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <ImageBackground source={require('../../assets/nobel.jpg')} style={styles.container} blurRadius={10} >
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
                        <Image source={require('../../assets/nobel.jpg')} style={styles.image} />
                        <View style={styles.iconBackground} >
                            <MaterialIcons name="add-a-photo" size={40} color="black" style={styles.editPhotoIcon} onPress={() => navigation.navigate('Edit')} />
                        </View>
                    </View>
                </ImageBackground>












                <View style={{ backgroundColor: '#e0dede', height: '100%', marginTop: -10, padding: 25 }} borderRadius={5}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.title}>Username</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <Text style={styles.data}>Md. Habibur Rahaman Nobel</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green' }} onPress={() => navigation.navigate('Edit')}> Edit</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.title}>Designation</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <Text style={styles.data}>Frontend Developer</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green' }} onPress={() => navigation.navigate('Edit')}> Edit</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.title}>Phone</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <Text style={styles.data}>01XXXXXXXXX</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green' }} onPress={() => navigation.navigate('Edit')}> Edit</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.title}>Email</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <Text style={styles.data}>habiburnobel@gmail.com</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green' }} onPress={() => navigation.navigate('Edit')}> Edit</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.title}>Department</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <Text style={styles.data}>Mobile and Web</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green' }} onPress={() => navigation.navigate('Edit')}> Edit</Text>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    container: {
        width: '100%',
        height: 400,
        aspectRatio: 1.15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey'
    },
    data: {
        fontSize: 20,
        width: 325,
        fontWeight: 'bold'
    },
    imageBackground: { backgroundColor: 'white', width: 225, height: 225, left: '20%', top: '5%', borderRadius: 125 },
    image: { width: 200, height: 200, borderRadius: 100, alignSelf: 'center', top: '5%' },
    editPhotoIcon: { color: 'white', alignSelf: 'center', top: '10%' },
    iconBackground: { backgroundColor: 'black', borderRadius: 30, width: 60, height: 60, left: '85%', top: '-50%' }
})
export default EditProfileScreen;