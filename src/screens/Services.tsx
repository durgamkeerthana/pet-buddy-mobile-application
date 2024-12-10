import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Services = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertext}>Hello, How may I help you ?</Text>
      <View style={styles.buttoncontainer}>
      <TouchableOpacity>
        <Image style={styles.buttons} source={require('../assets/veterinary.jpeg')}></Image>
        <Text>Veterinary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Image style={styles.buttons}source={require('../assets/grooming.png')}></Image>
        <Text>Grooming</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headertext:{
    fontWeight:'bold',
    marginTop: 10,
    fontSize:20,
  },
  buttoncontainer:{
    display:'flex',
    flexDirection: 'row',
    gap: 30,
    marginTop: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  buttons:{
    height: 80,
    width: 80,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 20,
  }
})