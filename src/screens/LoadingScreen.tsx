import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}source={require('../assets/loadingscreen.png')}/>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height:'100%',
    width:'100%',
},
});
export default LoadingScreen;