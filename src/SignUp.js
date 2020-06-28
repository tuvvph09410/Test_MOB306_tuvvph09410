import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function SignUp(navigation) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: -100, marginBottom: 100 }}>SignUp</Text>

        <TextInput
            style={{ width: 350, height: 50, backgroundColor: '#fffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
            underlineColorAndroid='rgba(0,0,0,0)'
           
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
        />
        <TextInput
            style={{ width: 350, height: 50, backgroundColor: '#fffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
            
            underlineColorAndroid='rgba(0,0,0,0)'
            
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
        />
        <TextInput
            style={{ width: 350, height: 50, backgroundColor: '#fffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
            
            underlineColorAndroid='rgba(0,0,0,0)'
         
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={{ borderRadius: 40, height: 50, width: 200, backgroundColor: '#228B22', marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}

        >
            <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>SignUp</Text>
        </TouchableOpacity>
    </View>
    );
}