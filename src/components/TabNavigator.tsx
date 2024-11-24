import react from 'React';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Services from '../screens/Services';
import Training from '../screens/Training';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home"  options={{ headerShown: false }} component={HomePage}  />
          <Tab.Screen name="Services" component={Services} options={{ headerShown: false }} />
          <Tab.Screen name="Trainings" component={Training} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
  }