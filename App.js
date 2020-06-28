import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Login from './src/Login';
import SignUp from './src/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#228B22'}></StatusBar>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />
    

      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ title: 'SignUp' }}
        
      />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
