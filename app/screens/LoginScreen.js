import React from 'react';
import { View, Text, Button } from 'react-native';



const LoginScreen = props => {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Login" onPress={
                () => {
                    props.navigation.navigate('Home')
                }
            } />
        </View>
    )
}

export default LoginScreen;
