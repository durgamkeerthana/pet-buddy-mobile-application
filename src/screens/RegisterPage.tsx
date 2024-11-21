import { StyleSheet, TextInput, Image, Text, Button, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterPage = ({ navigation }: any) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const[confirmpassword, setconfirmpassword]= useState('');

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  // const handleRegister =()=>{
  //   navigation.navigate('Home')
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        testID="pet-image"
        style={styles.image}
        source={require('../assets/petregister.jpeg')}
      />
      <Text style={styles.header}>Hey! welcome to PetBuddy</Text>

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
      />
      <TextInput
        value={confirmpassword}
        testID="confirm-password-field"
        style={styles.input}
        placeholder="confirm your password"
        onChangeText={(text) => setconfirmpassword(text)}
      />

      <View style={styles.buttonview}>
        <Button title="Register" color="white"  />
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



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
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 30,
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
export default RegisterPage;
