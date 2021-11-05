import 'react-native-gesture-handler';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SportScreen from './screens/SportScreen';
import ProjectScreen from './screens/ProjectScreen';
import HolidayScreen from './screens/HolidayScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import AppScreen from './screens/AppScreen';
import SettingScreen from './screens/SettingScreen';

import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Sports"
                component={SportScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="soccer-ball-o" size={24} color="black" />
                    )
                }}

            />
            <Tab.Screen
                name="Projects"
                component={ProjectScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="code" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name="Holidays"
                component={HolidayScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="calendar" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const HomeDrawer = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
            <Drawer.Screen name="Apps" component={AppScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
            <Drawer.Screen name="Tab" component={TabScreen} />
        </Drawer.Navigator>


    )
}

function AppNavigator() {
    return (

        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeDrawer} />
        </Stack.Navigator>
    )
}



export default AppNavigator;
