import {StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList} from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

const HomePage = ({navigation, route}: any) => {
  const [pets, setPets] = useState<any[]>([]);
  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };
  const Addpet = () => {
    navigation.navigate('AddPet');
  };
  
  const handlePetProfile = (pet: any) => {
    navigation.navigate('PetProfile', { pet });
  };

const fetchPets = async () => {
  try {
    const response = await fetch('http://localhost:3000/users/getPets', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      setPets(data); 
    } else {
      console.error('Failed to fetch pets');
    }
  } catch (error) {
    console.error('Error fetching pets:', error);
  }
};


useEffect(() => {
  fetchPets();
}, []); 
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.usernametext}>Hi</Text>
        <TouchableOpacity onPress={handleUserProfile}
          >
      <Image testID="profile-image"style={styles.profile}source={require('../assets/userprofile.png')}/>
      </TouchableOpacity>
      </View>
      <View style={styles.headerview}>
        <Image style={styles.headerimage} source={require('../assets/petpaw.png')} />
        <Text style={styles.headertext}>MyPets</Text>
        </View>
        <View style={styles.button}>
          <Button title='Add Pet' color='white' onPress={Addpet}/> 
      </View>
      <FlatList 
        data={pets} 
        keyExtractor={(item) => item._id} 
        renderItem={({ item }) => (
          <View style={styles.pet} accessible={true}>
            <TouchableOpacity  onPress={() => handlePetProfile(item)} accessibilityRole="button"
          accessible={true}>
            <Image
                source={{ uri: `data:image/jpeg;base64,${item.image}` }} 
                style={styles.petImage}
              />
              
              </TouchableOpacity>
            <Text style={styles.petName}>{item.name}</Text>
            <Text>Breed:{item.breed}</Text>
            <Text>{item.age} years old</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerview: {
    borderRadius: 5,
    borderWidth: 3,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginTop: 10,
  },
  usernametext: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 30,
    color: 'green',
  },
  headerimage: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  profile: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    borderRadius: 20,
    borderWidth: 2,
  },
  headertext: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
  button: {
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'green',
    borderWidth: 2,
    height: 50,
    width: '40%',
  },
  pet: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  petName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});

export default HomePage;
