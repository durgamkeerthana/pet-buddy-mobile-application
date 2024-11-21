import react from 'React';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialPage from '../screens/InitialPage';
import LoginPage from '../screens/LoginPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={InitialPage}
        />
       <Stack.Screen name="Login" component={LoginPage}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
