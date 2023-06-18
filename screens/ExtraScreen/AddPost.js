import { StyleSheet, Text, View , ScrollView ,TextInput , Pressable,Keyboard} from 'react-native'
import React, { useState ,useEffect} from 'react'
import {firebase} from '../../config';

const AddPost = () => {
    const[title,addtitle]=useState('');
    const[desc,adddesc]=useState('');
    const[username,setUsername]=useState('');
    const post=firebase.firestore().collection('PostData');
    useEffect(()=>{


        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
          if(snapshot.exists){
            setUsername(snapshot.data())
          }
          else{
            setUsername('$$$$')
          }
        },[])
      })
    const addField=()=>{
        if(desc && title && desc.length>0 && title.length>0){
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data={
                heading:title,
                content:desc,
                user:username,
                time:timestamp,
            };
          
          firebase.firestore().collection('PostData').add(data)
            .then(()=>{
                addtitle('');
                adddesc('');
                
                Keyboard.dismiss();
            }).catch((error)=>{
                alert(error)
            })
        }
        
    }
    
  return (
    <View style={styles.boxforpost}>
        
        <ScrollView>
        <Text style={styles.login}>Add Post and Share Informtion to All</Text>

          <TextInput
            style={[styles.input]}
            placeholder='Enter Tile'
            maxLength={100}
            
            editable
            multiline
            onChangeText={(title)=>addtitle(title)}
            autoCorrect={true}
            value={title}


          ></TextInput>
          <TextInput
            style={styles.input2}
            placeholder='Enter Description'
            maxLength={2000}
    
            onChangeText={(description)=>adddesc(description)}
            
            autoCorrect={false}
            editable
            multiline
            value={desc}
            

          ></TextInput>
          <Pressable style={styles.logbutton} onPress={addField} >
            <Text style={styles.loginbutton}>Post Now</Text>
            
          </Pressable>
         
        </ScrollView>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
    boxforpost:{
        backgroundColor:'#9146FF',

    },
    input: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        height:80,
        
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        fontSize: 15,
        borderColor: '#FFFFFF',
        borderWidth:2,
        borderColor:'#9146FF',
    
    
      },
      input2: {
        
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom:10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        fontSize: 15,
        borderColor: '#FFFFFF',
        height:370,
        borderWidth:2,
        borderColor:'#9146FF',
    
    
      },
      login: {
        color: '#FFFFFF',
        margin:20,
        marginBottom:10,
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
      },
      logbutton: {
        color: '#9146FF',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
    
        margin: 50,
        marginBottom:20,
      },
      loginbutton: {
        color: '#9146FF',
        alignItems: 'center',
        padding: 30,
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 5,
        paddingLeft: 70,
    
      },
})