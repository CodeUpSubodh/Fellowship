import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { PermissionsAndroid, SafeAreaView, Image, ScrollView, Animated } from 'react-native';
import React , {useState ,useEffect} from 'react'
import {firebase}  from '../config'
import ImagePicker from 'react-native-image-crop-picker';
import takePhotoFromCamera from 'react-native-image-crop-picker'
import {

  Platform,
 
  Alert,
  ActivityIndicator,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from './ExtraScreen/AddPost';
import {useNavigation} from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const Home = () => {
  

  const[username,setUsername]=useState('')
  const [image,setImage]=useState(null)
  const navigation=useNavigation();
 
  function addposttransfer(){
    navigation.navigate("addposts");
  }
  
  const choosePhotoFromLibrary = () => {
    
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };
  
  
  
  
  return (
    <SafeAreaView >
      
     <Animated.View 
     style={[
       styles.header,
      
      ]}
     >
      <TouchableOpacity onPress={addposttransfer}>
      <Image
      source={require('./assetts/add.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
      </TouchableOpacity>
      <Animated.Image
      source={require('./assetts/logo-png.png')}
      style={{width: 30, height: 30}}
      resizeMode="contain"
      />
      
      <Animated.Image
      source={require('./assetts/logo1.png')}
      style={{width: 30, height: 30 }}
      resizeMode="contain"
    
      />
     </Animated.View>

     <ScrollView 
     scrollEventThrottle={16}
     onScroll={Animated.event([{
    
     }],
     { useNativeDriver: false })}
     >

      <View style={styles.box}><Text></Text></View>

      <View style={styles.box}><Text></Text></View>

      <View style={styles.box}></View>

      <View style={styles.box}></View>

      <View style={styles.box}></View>

      <View style={styles.box}></View>

     </ScrollView>
   </SafeAreaView>
      
  
   
    
  )
}

export default Home

const styles = StyleSheet.create({
  header:{
    height:70,
    backgroundColor: '#9146FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF'
  },
  box:{
    heigh:200,
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5
  }
});