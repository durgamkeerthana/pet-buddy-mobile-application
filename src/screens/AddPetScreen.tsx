import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; 
import { SafeAreaView } from 'react-native-safe-area-context';


const AddPetScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('');
  const [gender, setGender] = useState('');
  const [remarks, setRemarks] = useState('');
  

  const chooseFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return;
        }
        if (response.assets && response.assets.length > 0) {
          const asset = response.assets[0];
          if (asset.base64) {
            setImage(asset.base64);
          }
        } else {
          console.log('ImagePicker Error: No assets found');
        }
      }
    );
  };
  const handleAddPet = async() => {
    try{
      const response = await fetch('http://localhost:3000/users/addPet',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          age,
          breed,
          image,
          gender,
          weight,
          height,
          color,
          remarks,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        Alert.alert(data.message);
      } else {
        Alert.alert(data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error in adding Pet');
    }
  };
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add your pet details here!</Text>
      <View>
        <TouchableOpacity  testID= "image-touchable" onPress={chooseFromGallery}>
      {image ? (
       <Image source={{ uri: image }} style={styles.imagePreview} />
       ) : (
      <Image style={styles.imagePreview} source={require('../assets/userprofile.png')} />
         )}
        </TouchableOpacity>
        </View>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Pet Name" 
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        value={age}
        placeholder="Age"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        value={breed}
        placeholder="Breed"
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        value={height}
        placeholder="Height"
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        value={weight}
        placeholder="Weight"
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        value={color}
        placeholder="Color"
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        value={gender}
        placeholder="Gender"
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        value={remarks}
        placeholder="Remarks"
        onChangeText={setRemarks}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add to Pet List" onPress={handleAddPet} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    borderWidth:2,
    borderRadius: 20,
   
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth:2,
    alignSelf: 'center',
  },
  imagePlaceholder: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'gray',
  },
});

export default AddPetScreen;
