import react from 'React';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialPage from '../screens/InitialPage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialPage">
        <Stack.Screen
          name="InitialPage"
          component={InitialPage}
        />
       <Stack.Screen name="Login" component={LoginPage}
       />
      <Stack.Screen name='Register' component={RegisterPage}/>
      <Stack.Screen name='Home' component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
