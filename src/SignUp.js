import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function SignUp({ navigation }) {
    const [useName, setUseName] = useState('');
    const [pass, setPass] = useState('');
    const [rePass, setRePass] = useState('');
    const [dataLogin, setDataLogin] = useState([]);
    const KEYPASS = 'KEYPASS';
    const KEYNAME = 'KEYNAME';

    console.log(dataLogin)

    _SaveData = async () => {

        try {
            if (pass !== rePass) {
                alert('Không Trùng Mật Khẩu')
            } else {
                const USENAME = await AsyncStorage.getItem(KEYNAME);
                const PASS = await AsyncStorage.getItem(KEYPASS);
                if (USENAME !== null && PASS !== null) {
                    setUseName(USENAME);
                    setPass(PASS);
                    setDataLogin([{ username: USENAME, password: PASS }]);
                    alert('USENAME: ' + USENAME + ' || ' + 'PASS: ' + PASS);
                   
                 
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: -100, marginBottom: 100 }}>SignUp</Text>

            <TextInput
                style={{ width: 350, height: 50, backgroundColor: '#fffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={useName => setUseName(useName)}
                placeholderTextColor="black"
                underlineColorAndroid="transparent"
                value={useName}
                onSubmitEditing={async () => {
                    try {
                        await AsyncStorage.setItem(KEYNAME, useName)
                    }
                    catch (error) {

                    }
                }

                }

            />
            <TextInput
                style={{ width: 350, height: 50, backgroundColor: '#fffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
                value={pass}
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={pass => setPass(pass)}
                placeholderTextColor="black"
                underlineColorAndroid="transparent"
                autoCapitalize='none'
                secureTextEntry={true}
                onSubmitEditing={async () => {
                    try {
                        await AsyncStorage.setItem(KEYPASS, pass)
                    }
                    catch (error) {

                    }
                }

                }
            />
            <TextInput
                style={{ width: 350, height: 50, backgroundColor: '#fffff', borderRadius: 15, paddingHorizontal: 30, fontSize: 16, elevation: 2, shadowColor: '#ffffff', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, shadowOpacity: 0.75, marginBottom: '5%' }}
                underlineColorAndroid='rgba(0,0,0,0)'
                autoCapitalize='none'
                secureTextEntry={true}
                value={rePass}
                onChangeText={rePass => setRePass(rePass)}
                placeholderTextColor="black"
                underlineColorAndroid="transparent"

            />
            <TouchableOpacity style={{ borderRadius: 40, height: 50, width: 200, backgroundColor: '#228B22', marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}

                onPress={() => {_SaveData()}}
            >
                <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}