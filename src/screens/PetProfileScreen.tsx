import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const PetProfileScreen = ({ route }: any) => {
    const { pet } = route.params; 
  
    return (
      <View style={styles.container}>
        
        <Image
          source={{ uri: `data:image/jpeg;base64,${pet.image}` }}
          style={styles.Image}
        />
        <Text >{pet.name}</Text>
        <Text>Breed: {pet.breed}</Text>
        <Text>Age: {pet.age} years old</Text>
        <Text>weight:{pet.weight}kgs</Text>
    
        <Text></Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Image:{
        width:'100%',
        height: 400,
    }
});
  export default PetProfileScreen;