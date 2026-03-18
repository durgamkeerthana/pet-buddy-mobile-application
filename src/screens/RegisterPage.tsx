import { StyleSheet, TextInput, Image, Text, Button, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StackActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterPage = ({ navigation }: any) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const[confirmpassword, setconfirmpassword]= useState('');
  const[email, setemail]=useState('');
  const[phonenumber, setphonenumber]=useState('');
  const[aboutme, setaboutme]=useState('');
  const[adress, setadress]=useState('');
  
  
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handlePressRegister = async () => {
    if (password !== confirmpassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/users/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username,
        password,
        aboutme,
        email,
        phonenumber,
        adress,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert(data.message);
        navigation.dispatch(StackActions.replace('Login')); 
      } else {
        Alert.alert(data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('User registration failed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <Image
        testID="pet-image"
        style={styles.image}
        source={require('../assets/petregister.jpeg')}
      />
      <Text style={styles.header}>Hey! welcome to PetBuddy</Text>
<View style={styles.inputview}>
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
      <TextInput
        value={confirmpassword}
        testID="confirm-password-field"
        style={styles.input}
        placeholder="confirm your password"
        onChangeText={(text) => setconfirmpassword(text)}
        secureTextEntry
      />
<TextInput
        value={email}
        testID="email-field"
        style={styles.input}
        placeholder="Enter email"
        onChangeText={(text) => setemail(text)}/>
        <TextInput
        value={phonenumber}
        testID="phonenumber-field"
        style={styles.input}
        placeholder="Enter phonenumber"
        onChangeText={(text) => setphonenumber(text)}
      
      />
      <TextInput
        value={aboutme}
        testID="aboutme-field"
        style={styles.input}
        placeholder="share something intresting about you"
        onChangeText={(text) => setaboutme(text)}
      />
      <TextInput
        value={adress}
        testID="address-field"
        style={styles.input}
        placeholder="Enter your adress"
        onChangeText={(text) => setadress(text)}
      />
    </View>  
      <View style={styles.buttonview}>
        <Button title="Register" color="white" onPress={handlePressRegister}  />
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.text}>Already have an account? Login</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputview:{
   gap: 15,
  },
  input: {
    width: '100%',
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
    color: 'green',
  },
  buttonview: {
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'green',
    borderWidth: 2,
    height: 50,
    width: '40%',
  },
  text:{
    alignSelf:'center',
    marginTop: 5,
    fontWeight:'bold',
    color:'green'
  }
});
export default RegisterPage;
