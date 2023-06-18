import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from '../../config'

const Signup = (props) => {
  const [isActive, setActive] = useState(false);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [username,setUsername]=useState('');
  registerUser=async(username,email,password)=>{
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'https://fellowship-c8f2c.firebaseapp.com',

      })
      .then(()=>{
        alert('Verification Email sent')
       
      })
      .catch((error)=>{
        alert(error.message)
      })
      .then(()=>{
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
          username,
          email,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    })
  }
  return (
    <View style={styles.frontpage}>


      <Text style={styles.logo}>FELLOWSHIP</Text>



      <View style={[styles.halffrontpage, { borderTopLeftRadius: isActive ? 0 : 200 }, { borderTopRightRadius: isActive ? 0 : 200 }]}>
        <Text style={styles.login}>Create an Account and Meet Fellas!!</Text>
        <ScrollView>
          <TextInput
            style={[styles.input]}
            placeholder='Username'
            maxLength={15}
            keyboardType='default'
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onChangeText={(username)=>(setUsername(username))}


          ></TextInput>

          <TextInput
            style={[styles.input2]}
            placeholder='Enter Email'
            maxLength={30}
            keyboardType='email-address'
            onFocus={() => setActive(true)}
            onChangeText={(email)=>setEmail(email)}


          ></TextInput>
          <TextInput
            style={styles.input2}
            placeholder='Enter Password'
            maxLength={20}
            secureTextEntry

            onBlur={() => setActive(false)}
            onChangeText={(password)=>setPassword(password)}


          ></TextInput>
          <Pressable style={styles.signbutton} onPress={()=>registerUser(username,email,password)} >
            <Text style={styles.signinbutton}> SignUp</Text>

          </Pressable>

        </ScrollView>

      </View>
      <Pressable style={styles.deep} onPress={()=>props.navigation.navigate("Login")}>
        <Text style={styles.signuplinks}>Exsisting User?Login Now</Text>
      </Pressable>



    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  frontpage: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Ubuntu',

  },
  halffrontpage: {
    flex: 3,
    backgroundColor: '#9146FF',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
  logo: {
    color: '#9146FF',
    marginLeft: 38,
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    marginTop:70,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    fontSize: 15,
    borderColor: '#FFFFFF',


  },
  input2: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    fontSize: 15,
    borderColor: '#FFFFFF',


  },
  login: {
    color: '#FFFFFF',
    marginLeft: 38,
    marginTop: 75,
    fontSize: 25,
    fontWeight: 'bold',
  },
  signbutton: {
    color: '#9146FF',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    justifyContent: 'center',

    margin: 30,
  },
  signinbutton: {
    color: '#9146FF',
    alignItems: 'center',
    padding: 25,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 10,
    paddingLeft: 70,

  },
  deep: {
    backgroundColor: '#9146FF',


  },
  signuplinks: {
    backgroundColor: '#9146FF',
    justifyContent: 'flex-start',
    marginLeft: 120,
    color: '#FFFFFF',
    fontWeight: 500,
    marginBottom: 10,
  }

})