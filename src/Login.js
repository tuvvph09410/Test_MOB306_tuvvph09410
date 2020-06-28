import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

export default function Login({ route, navigation }) {
    const { data } = route.params;
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: -100, marginBottom: 100 }}>Login</Text>

            <TextInput
                style={{ width: 350, height: 50, backgroundColor: '#ffffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
                value={data[0]}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor="black"
                autoCapitalize='none'
                underlineColorAndroid="transparent"
              
            />
            <TextInput
                style={{ width: 350, height: 50, backgroundColor: '#ffffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
                value={data[1]}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor="#black"
                secureTextEntry={true}
                autoCapitalize='none'
                underlineColorAndroid="transparent"
               
            />
            <View style={{ width: 350, flexDirection: 'row', marginBottom: 150 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
                    <Text style={{ marginLeft: 10, textAlign: 'left', marginRight: 170, fontSize: 15, fontWeight: '900' }}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '900' }}>Forget Password?</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={{ borderRadius: 40, height: 50, width: 200, backgroundColor: '#228B22', marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => { alert('Đăng Nhập Thành Công') }}
            >
                <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}