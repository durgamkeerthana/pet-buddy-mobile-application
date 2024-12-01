import react from 'React';
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Services from '../screens/Services';
import Training from '../screens/Training';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false,  tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/homeicon.png')}
                            style={{ width: 30, height: 30, borderColor:'black' }}
                        /> )}}   />
          <Tab.Screen name="Services" component={Services} options={{ headerShown: false,  tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/services.png')}
                            style={{ width: 30, height: 30, borderColor:'black' }}
                        /> )}}   />
          <Tab.Screen name="Trainings" component={Training} options={{ headerShown: false,tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/training.png')}
                            style={{ width: 30, height: 30, borderColor:'black' }}
                        /> )}}   /> 
        </Tab.Navigator>
    );
  }