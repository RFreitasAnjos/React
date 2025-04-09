import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView,TextInput } from 'react-native-web';
import { Avatar, Icon, AvatarIcon } from 'react-native-elements';


function ContactList(){
  
  const {username,number} =route.params;

  return(
    <View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
      <View style={{}}>
        <Text>{{username}}</Text>
        <Text>{{number}}</Text>
        <Icon Avatar/>
      </View>
    </View>
  )
}


function HomeScreen(){
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text> Home Screen </Text>
      <Button onPress={() => navigation.navigate('ContactList',{})}/>
    </View>
  )
}

function Register(){
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

function LoginScreen({navigation}){


  return (
    <View style={styles.loginscreen}>
      <View style={styles.form}>
        <View style={{borderCurve:'circular'}} >
          <Avatar icon={AvatarIcon}/>
        </View>

        <View style>
          <Text>Name</Text>
          <TextInput/>
          <Text>Password</Text>
          <TextInput secureTextEntry/>
        </View>

        <View style={styles.buttons}>
          <Button title='Login' onPress={() => navigation.navigate('Home')}/>
          <Button title='Cadastre-se' color="red" onPress={() => navigation.navigate('Register')}/>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeScreen}
      options={{headerTitleAlign:'center',}}/>
      <Stack.Screen name="Register" component={Register}
      options={{headerTitleAlign:'center'}}/>
    <Stack.Screen name ="Login" component={LoginScreen}
      options={{headerShown:false,
        headerRight: () => (
          <Ionicons
           name="notifications-outline"
           size={24}
           color="black"
           style={{marginRight: 10}}
           />
        )
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginscreen: {
    alignItems: 'center',
    justifyContent:'center',
  },
  image_avatar: {
    borderCurve: 5,
  },
  form:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    width:500,
    height:200,
    backgroundColor:'grey',
  },
  buttons:{
    width:'auto',
    backgroundColor:'black',
  }

})