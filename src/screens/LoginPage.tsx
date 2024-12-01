import { StyleSheet, TextInput, Image, Text, Button, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackActions } from '@react-navigation/native';


const LoginPage = ({ navigation }: any) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handlePressLogin = async () => {
    setIsLoading(true);  
    navigation.navigate('Loading');  
    try {
      const response = await fetch('http://localhost:3000/users/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
       setTimeout(() => {
        setIsLoading(false);
        navigation.dispatch(StackActions.replace('Main'));  
      }, 3000); 
      } else {
        setIsLoading(false);
        Alert.alert(data.message); 
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error:', error);
      Alert.alert('An error occurred while logging in');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        testID="pet-paw-image"
        style={styles.image}
        source={require('../assets/petpaw.png')}
      />
      <Text style={styles.header}>Login to PetBuddy!</Text>

      <TextInput
        value={username}
        testID="username-field"
        style={styles.input}
        placeholder="Enter username"
        onChangeText={(text) => setusername(text)}
      />

      <TextInput
        value={password}
        testID="password-field"
        style={styles.input}
        placeholder="Enter password"
        onChangeText={(text) => setpassword(text)}
        secureTextEntry
      />
      <View style={styles.buttonview}>
        <Button title="Login" color="white" onPress={handlePressLogin} />
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text>Don't have an account? Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
  },
  image: {
    borderRadius: 350,
    borderColor: 'black',
    borderWidth: 2,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00bfff',
  },
  buttonview: {
    backgroundColor: '#00bfff',
    borderWidth: 2,
    height: 50,
    width: '40%',
  },
});
