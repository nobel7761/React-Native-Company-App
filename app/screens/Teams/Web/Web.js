import React from 'react';
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card, Text, } from 'react-native-elements';

import people1 from '../../People/people1';
import people2 from '../../People/people2';
import people3 from '../../People/people3';
import people4 from '../../People/people4';
import people5 from '../../People/people5';
import people6 from '../../People/people6';
import people7 from '../../People/people7';
import people8 from '../../People/people8';
import people9 from '../../People/people9';
import people10 from '../../People/people10';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function Web() {
    return (

        <Tab.Navigator screenOptions={tabOptions}>

            <Tab.Screen name='W1' component={people1} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/01.jpg')} />
                ),
            }} />
            <Tab.Screen name='W2' component={people2} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/02.jpg')} />
                ),
            }} />
            <Tab.Screen name='W3' component={people3} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/03.jpg')} />
                ),
            }} />
            <Tab.Screen name='W4' component={people4} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/04.jpg')} />
                ),
            }} />
            <Tab.Screen name='W5' component={people5} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/05.jpg')} />
                ),
            }} />
            <Tab.Screen name='W6' component={people6} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/06.jpg')} />
                ),
            }} />
            <Tab.Screen name='W7' component={people7} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/07.jpg')} />
                ),
            }} />
            <Tab.Screen name='W8' component={people8} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/08.jpg')} />
                ),
            }} />
            <Tab.Screen name='W9' component={people9} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/09.jpg')} />
                ),
            }} />
            <Tab.Screen name='W10' component={people10} options={{
                tabBarIcon: (focused, tintColor) => (
                    <Image style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/24.jpg')} />
                ),
            }} />

        </Tab.Navigator >

    )
}

const tabOptions = {
    headerShown: false,




}



export default Web;