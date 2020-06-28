import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const [state, setState] = useState([
        {
            user: 'admin',
            pass: 'truelove',
        },
        {
            user: 'admin1',
            pass: 'truelove2'
        },
    ]);
    console.log(state);
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
                style={{ flex: 1 }}
                data={state}

                renderItem={({ item }) =>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 20, height: 50, width: 350, backgroundColor: '#228B22', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => navigation.navigate('Login', { name: [item.user, item.pass] })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>{item.user}  || </Text>
                                <Text style={{ fontSize: 18, fontWeight: '400', color: 'white', marginLeft: 10, marginRight: 60 }}>{item.pass}</Text>

                                <AntDesign name="right" size={30} color="white" />

                            </View>
                        </TouchableOpacity>
                    </View>
                }
            />
           
            <TouchableOpacity style={{ borderRadius: 40, height: 50, width: 200, backgroundColor: '#228B22', marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => { navigation.navigate('SignUp') }}
            >
                <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}