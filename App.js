import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import * as firebase from 'firebase'

import { createDrawerNavigator} from 'react-navigation-drawer'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Header from './shared/header';
import React from 'react';


var firebaseConfig = {
    apiKey: "AIzaSyBEeiYQmTTWeC1uZSncYnK2cDYWXn4ii50",
    authDomain: "login-system-1a548.firebaseapp.com",
    projectId: "login-system-1a548",
    storageBucket: "login-system-1a548.appspot.com",
    messagingSenderId: "1039360087466",
    appId: "1:1039360087466:web:4fb28e9d7bcd95e1b647d3",
    measurementId: "G-XJ5V9NCK3Z"
};
  
// Initialize Firebase


if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

const AppStack = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions: ( { navigation }) => {
      return {
         headerTitle: () => (<Header navigation={navigation} title='Home' />),
      }
    },
    },
  
})
  
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register:RegisterScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      
    },
    {
      initialRouteName:"Loading"
    }
  )
)