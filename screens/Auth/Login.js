import { Alert, Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../../config'

const Login = (props) => {
  const navigation=useNavigation();
  const [email,setemail]=useState('');
  const [password,setPassword]=useState('');
  const [isActive, setActive] = useState(false);
  loginUser= async(email,password)=>{
    
    try{
      
      await firebase.auth().signInWithEmailAndPassword(email,password)
      navigation.navigate("Home");
    }catch(error){
      alert(error.message)
    }

  }
  return (
    <View style={styles.frontpage}>


      <Text style={styles.logo}>FELLOWSHIP</Text>



      <View style={[styles.halffrontpage, { borderTopLeftRadius: isActive ? 0 : 200 }, { borderTopRightRadius: isActive ? 0 : 200 }]}>
        <Text style={styles.login}>Login And Lets Get Started!!</Text>
        <ScrollView>

          <TextInput
            style={[styles.input]}
            placeholder='Enter Email'
            maxLength={30}
            keyboardType='email-address'
            onFocus={() => setActive(true)}
            onChangeText={(email)=>setemail(email)}
            autoCapitalize='none'
            autoCorrect={false}


          ></TextInput>
          <TextInput
            style={styles.input2}
            placeholder='Enter Password'
            maxLength={20}
            secureTextEntry={true}
            onChangeText={(password)=>setPassword(password)}
            onBlur={() => setActive(false)}
            autoCorrect={false}
            


          ></TextInput>
          <Pressable style={styles.logbutton} onPress={()=>loginUser(email,password)} >
            <Text style={styles.loginbutton}> LogIn</Text>
            
          </Pressable>
         
        </ScrollView>

      </View>
        <Pressable style={styles.deep} onPress={()=>props.navigation.navigate("Signup")}>
          <Text style={styles.signuplinks}>New Here? SignUp</Text>
          </Pressable>
     


    </View>

  )
}

export default Login

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
    marginTop: 100,
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
  logbutton: {
    color: '#9146FF',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    justifyContent: 'center',

    margin: 50,
  },
  loginbutton: {
    color: '#9146FF',
    alignItems: 'center',
    padding: 30,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 10,
    paddingLeft: 70,

  },
  deep: {
    backgroundColor:'#9146FF',
    
   
  },
  signuplinks:{
    backgroundColor:'#9146FF',
    justifyContent:'flex-start',
    marginLeft:150,
    color:'#FFFFFF',
    fontWeight:500,
    marginBottom:10,
  } 
  
})