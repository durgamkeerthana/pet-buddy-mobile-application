import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';


const UserProfileScreen = ({ route }: any) => {
  const [image, setImage] = useState('');
  const[user, setUser]= useState<any>();
  const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/getUser', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setUser(data); 
      } else {
        console.error('Failed to fetching users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []); 
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
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity >
            <Image
                source={{ uri: `data:image/jpeg;base64,${user.image}` }} 
                style={styles.image}
              />
              </TouchableOpacity> */}
      <FlatList
        data={user} 
        keyExtractor={(item) => item._id} 
        renderItem={({ item }) => (
          <View >
            <Text>{item.username}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phonenumber}</Text>
            <Text>{item.adress}</Text>
            <Text>{item.aboutme}</Text>
          </View>
        )}
      />
    </View>
  
      )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserProfileScreen;
