import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/AppNavigator';
import { Provider } from 'react-redux';
import Store from './app/redux/store';
import { navigationRef, navigate } from './app/NavigationRoot';





function App() {
  return (

    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>


  )
}


export default App;
