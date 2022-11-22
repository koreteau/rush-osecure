import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export default function MenuScreen({navigation}) {

    const programme = () => {
        navigation.navigate('Programme')
    }
    const plans = () => {
        navigation.navigate('Home')
    }
    const bracelet = () => {
        navigation.navigate('Bracelet')
    }
    const plan = () => {
        navigation.navigate('Plan')
    }
    const home = () => {
        navigation.navigate('Home')
    }
    const Tab = createBottomTabNavigator();

    return (


        <View style={{ flex: 1, alignItems: 'center',backgroundColor: '#fff', }}>
              <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>


         

            <TouchableOpacity
                style={{paddingTop:60}}
                onPress={() => Linking.openURL('https://web.powerva.microsoft.com/environments/40062e33-f132-ec55-b49c-b1d2d143ad48/bots/new_bot_aa3d7397dc214ea9b88ffdcc905d6c84/webchat')}>
                <Image
                    source={require('../../../img/Aide.png')}
                    style={styles.img}
                />
            </TouchableOpacity>
        </View>

    )

}