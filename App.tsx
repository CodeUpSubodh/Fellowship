import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View,PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
import Home from './screens/Home';
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import { create } from 'react-test-renderer';
import {firebase} from './config';
import AddPost from './screens/ExtraScreen/AddPost';
import Profile from './screens/ExtraScreen/Profile';
const App = () => {
  const [intializing,setIntializing]=useState(true);
  const [user,setUser]=useState();
  
  function onAuthStateChanged(user){
    setUser(user);
    if(intializing)
    {
      setIntializing(false);
    }
  
    useEffect(()=>{
      const subscriber=firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    },[]);
    if(intializing)
    {
      return null;
    }
    if(user){
      return(
        
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
          </Stack.Navigator>
       
      )
    }

  }
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    
       
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='addposts' component={AddPost}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Profile' component={Profile}/>
      
      
    </Stack.Navigator>

  </NavigationContainer>

  )
}

export default App

