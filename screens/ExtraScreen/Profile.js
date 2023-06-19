import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React, { useState , useEffect} from 'react'
import {firebase } from '../../config'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { useNavigation } from '@react-navigation/native';
const Profile = () => {
  const navigation=useNavigation();
    const[username,setUsername]=useState('')
    // useEffect(()=>{


    //     firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
    //     .then((snapshot)=>{
    //       if(snapshot.exists){
    //         setUsername(snapshot.data())
    //       }
    //       else{
    //         setUsername('$$$$')
    //       }
    //     },[])
    //   })
    function signout(){
        navigation.navigate('Login');
        firebase.auth().signOut();
        
      }
  return (
    <View style={styles.profile}>
        <Image style={styles.image} source={require('../assetts/man.png')}></Image>
      <Text style={styles.username}>{username}</Text>
      <Pressable onPress={signout}>
        <Text style={styles.signout}>SignOut</Text>
      </Pressable>
    </View>
   
  )
}

export default Profile

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        margin:150,
        marginBottom:20,
      
    },

    username:{
        marginLeft:120,
        fontSize:30,

    },
    signout:{
        marginLeft:145,
        fontSize:25,
        marginTop:20,
        backgroundColor:'#FFFFFF',
        color:'#9146FF'
    }
    
})