import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const InitialPage = ({ navigation }:any) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.welcomeimage}source={require('../assets/welcomedog.jpeg')}/>
        <Text style={styles.header}> Welcome to PetBuddy!</Text>
        <Text style={styles.welcomeText}>Shall we go out and play, since you are busy with your work, I am feeling alone</Text>
        <View style={styles.buttonview}>
        <Button color='white' title="Get Started" onPress={() => navigation.navigate('Login')} ></Button> 
        </View>
     </SafeAreaView>
  )
}

export default InitialPage

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:'auto',
        fontSize: 25,
       fontWeight: 'bold',
       textAlign:'center',
       marginTop: 30,
    },
    welcomeimage:{
        height:'70%',
        width:'100%',
    },
    welcomeText:{
        marginTop: 10,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        marginBottom:15,
        color: 'green',
    },
    buttonview:{
        backgroundColor:'green',
        borderWidth:2,
        height: 50,
        width: '40%',
        marginLeft: '30%',
        borderRadius: 20,
        
    }
})