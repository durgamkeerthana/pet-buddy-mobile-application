import react from 'React';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialPage from '../screens/InitialPage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import LoadingScreen from '../screens/LoadingScreen';
import TabNavigator from './TabNavigator';
import UserProfileScreen from '../screens/UserProfileScreen';
import AddPet from '../screens/AddPet';
import PetProfileScreen from '../screens/PetProfileScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PetBuddy">
       <Stack.Screen name="PetBuddy" component={InitialPage}/>
       <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name='Register' component={RegisterPage}/>
      <Stack.Screen name='Loading' options={{ headerShown: false }} component={LoadingScreen}/>
      <Stack.Screen name='Main' component={TabNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name='UserProfile' component={UserProfileScreen} />
      <Stack.Screen name='AddPet' component={AddPet}/>
      <Stack.Screen name='PetProfile' component={PetProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
export default AppNavigator;
