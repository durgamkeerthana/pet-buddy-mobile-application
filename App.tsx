import * as React from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './src/components/TabNavigator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <StatusBar barStyle="dark-content" />
    <AppNavigator/>
    </SafeAreaView>
  );
};

export default App;