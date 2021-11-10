import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SportScreen from './screens/SportScreen';
import ProjectScreen from './screens/ProjectScreen';
import HolidayScreen from './screens/HolidayScreen';
import AppScreen from './screens/AppScreen';
import SettingScreen from './screens/SettingScreen';
import Graphics from './screens/Teams/Graphics/Graphics';
import AI from './screens/Teams/AI/AI';
import HR from './screens/Teams/HR/HR';
import Mobile from './screens/Teams/Mobile/Mobile';
import Web from './screens/Teams/Web/Web';
import EditProfileScreen from './screens/EditProfileScreen';
import edit from './components/edit';

import Icon from './components/Icon';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

var year = new Date().getFullYear();

const TeamTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelPosition: 'beside-icon', tabBarIcon: () => { return null }, tabBarLabelStyle: { fontSize: 15 } }}>

            <Tab.Screen name="Graphics" component={Graphics} />
            <Tab.Screen name="AI" component={AI} />
            <Tab.Screen name="Web" component={Web} />
            <Tab.Screen name="Mobile" component={Mobile} />
            <Tab.Screen name="HR" component={HR} />

        </Tab.Navigator >
    )
}

const TabScreen = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Team Details"
                component={TeamTab}
                options={{
                    headerTitleAlign: 'center',
                    headerLeft: () => (<Icon
                        action={() => navigation.goBack()}
                        name="md-return-up-back-outline"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingLeft: 15
                        }}
                    />),
                    tabBarLabel: 'Team',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="groups" size={24} color="black" />
                    )
                }}

            />
            <Tab.Screen
                name="Sports"
                component={SportScreen}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                    headerLeft: () => (<Icon
                        action={() => navigation.goBack()}
                        name="md-return-up-back-outline"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingLeft: 15
                        }}
                    />),
                    tabBarLabel: 'Sports',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="soccer-ball-o" size={24} color="black" />
                    )
                }}

            />
            <Tab.Screen
                name="Ongoing Projects"
                component={ProjectScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerLeft: () => (<Icon
                        action={() => navigation.goBack()}
                        name="md-return-up-back-outline"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingLeft: 15
                        }}
                    />),
                    tabBarLabel: 'Projects',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="code" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name={`Holidays ${year}`}
                component={HolidayScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerLeft: () => (<Icon
                        action={() => navigation.goBack()}
                        name="md-return-up-back-outline"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingLeft: 15
                        }}
                    />),
                    tabBarLabel: 'Holidays',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="calendar" size={24} color="black" />
                    )

                }}
            />
        </Tab.Navigator>
    )
}

const Dashboard = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Your Profile" component={ProfileScreen} />
            <Drawer.Screen name="Apps" component={AppScreen} />
            <Drawer.Screen name="More" component={TabScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>


    )
}

function AppNavigator() {
    return (

        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerTitle: 'Edit Your Profile', headerTitleAlign: 'center', headerShown: false }} />
            <Stack.Screen name="Edit" component={edit} options={{ headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    )
}



export default AppNavigator;
