import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

const PetGallery = ({  route }: { route:any }) => {
  const { pet } = route.params;
  const petName = pet?.name || '';
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/getPetsGallery?name=${petName}`);
        const data = await response.json();

        if (response.ok) {
          setImages(data.gallery || []);
        } else {
          console.log('Error fetching pet gallery:', data.message);
        }
      } catch (error) {
        console.log('Error fetching pet gallery:', error);
      }
    };
    if (petName) {
      fetchGallery();
    }
  }, [petName]);

 
  const chooseFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      async response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return;
        }

        if (response.assets && response.assets.length > 0) {
          const asset = response.assets[0];
          if (asset.uri) {
            try {
             
              const response = await fetch('http://localhost:3000/users/addImageToGallery', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: petName,
                  imageUri: asset.uri,
                }),
              });

              const data = await response.json();

              if (response.ok) {
               
                setImages(prevImages => [...prevImages, asset.uri]);
              } else {
                console.log('Error adding image to gallery:', data.message);
              }
            } catch (error) {
              console.log('Error adding image to gallery:', error);
            }
          }
        } else {
          console.log('ImagePicker Error: No assets found');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Gallery</Text>

      <TouchableOpacity style={styles.addButton} onPress={chooseFromGallery}>
        <Text style={styles.buttonText}>Add a Pet Photo</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.imageGallery}>
        {images.length === 0 ? (
          <Text style={styles.placeholder}>No photos added yet. Tap the button to add photos!</Text>
        ) : (
          images.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.image} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default PetGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  placeholder: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
  },
});

