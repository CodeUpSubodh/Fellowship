import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import { PermissionsAndroid, SafeAreaView, Image, ScrollView, Animated } from 'react-native';
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'
import ImagePicker from 'react-native-image-crop-picker';
import takePhotoFromCamera from 'react-native-image-crop-picker'
import {
  Platform,

  Alert,
  ActivityIndicator,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { db } from '../config'
import { ref, onValue, query } from 'firebase/database'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
const Home = () => {
  const [dataarr, setdatarr] = useState([])
  const data = firebase.firestore().collection('PostData')
  useEffect(() => {
    data.onSnapshot(
      querySnapshot => {
        const datarr = []
        dataarr.forEach((doc) => {
          const { comment, content, heading, like, time, email } = doc.data()
          dataarr.push({
            id: doc.id,
            heading,
            content,
            like,
            time,
            comment,
            email
          })
        })
        setdatarr(dataarr)
      }
    )
  }, [])



  const navigation = useNavigation();

  function addposttransfer() {
    navigation.navigate("addposts");
  }
  function profiletransfer() {
    navigation.navigate("Profile");
  }





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
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Animated.Image
          source={require('./assetts/logo-png.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={profiletransfer}>
          <Animated.Image
            source={require('./assetts/logo1.png')}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"

          />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{

        }],
          { useNativeDriver: false })}
      >
 {dataarr.map((item,key)=>{       
<View style={styles.box}>
          <Text style={styles.username}>
            {item.username}
          </Text>
          <Text style={styles.time}>
           {item.map}
          </Text>
          <Text style={styles.itemHeading}>
            {item.heading}
          </Text>
          <Text style={styles.itemText}>{item.conten}</Text>
        </View>
})}





















<View style={styles.box}>
          <Text style={styles.username}>
            sri.subodh
          </Text>
          <Text style={styles.time}>
            19 Jun 2023 12:47:16
          </Text>
          <Text style={styles.itemHeading}>
            Submision
          </Text>
          <Text style={styles.itemText}>Today is Submision of App</Text>
        </View>








        <View style={styles.box}>
          <Text style={styles.username}>
            looterex
          </Text>
          <Text style={styles.time}>
            19 Jun 2023 04:51:32
          </Text>
          <Text style={styles.itemHeading}>
            First Post from the app
          </Text>
          <Text style={styles.itemText}>Lets See how it goes</Text>
        </View>

      

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
  header: {
    height: 70,
    backgroundColor: '#9146FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF'
  },
  box: {
    heigh: 200,
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5
  },
  username:{
    color:'black',
    fontWeight:'bold',
    margin:10,
    fontSize:20,
  },
  time:{
    color:'black',
    marginLeft:10,

  },
  itemHeading:{
    color:'black',
    margin:20,
    fontSize:30,
    fontWeight:'bold'

  },
  itemText:{
    color:'black',
    margin:20,
    fontSize:15,

  }
  
  
});