import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { navigationRef, navigate } from '../NavigationRoot';



function SettingScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 10 }}>
            <View>
                <Text style={styles.title}>About</Text>
                <View style={{ marginBottom: 20 }}>
                    <Card borderRadius={10}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 30 }}><Feather name="send" size={24} color="black" /></View>
                            <View style={{ paddingLeft: 20, width: 270 }}><Text style={{ fontSize: 15 }}>Contact</Text></View>
                            <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ width: 30 }}><FontAwesome5 name="heart" size={24} color="black" /></View>
                            <View style={{ paddingLeft: 20, width: 270 }}><Text style={{ fontSize: 15 }}>Review</Text></View>
                            <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ width: 30 }}><MaterialIcons name="library-books" size={24} color="black" /></View>
                            <View style={{ paddingLeft: 20, width: 270 }}><Text style={{ fontSize: 15 }}>Terms of Use</Text></View>
                            <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ width: 30 }}><MaterialIcons name="privacy-tip" size={24} color="black" /></View>
                            <View style={{ paddingLeft: 20, width: 270 }}><Text style={{ fontSize: 15 }}>Privacy Policy</Text></View>
                            <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
                        </View>
                    </Card>
                </View>
            </View>
            <View>
                <Text style={styles.title}>General</Text>
                <View style={{ marginBottom: 20 }}>
                    <Card borderRadius={10}>
                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ width: 30 }}><Feather name="edit" size={24} color="black" /></View>
                            <View style={{ paddingLeft: 20, width: 270 }}><Text style={{ fontSize: 15 }}>Edit Profile</Text></View>
                            <TouchableHighlight onPress={() => { navigation.navigate('EditProfileScreen') }}>
                                <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
                            </TouchableHighlight>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ width: 30 }}>
                                <TouchableOpacity onPress={() => {
                                    navigate("Login");
                                }}>
                                    <AntDesign name="logout" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingLeft: 20, width: 270 }}><Text style={{ fontSize: 15 }}>Logout</Text></View>

                        </View>


                    </Card>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'grey',
        paddingLeft: 20,

    }
})

export default SettingScreen;