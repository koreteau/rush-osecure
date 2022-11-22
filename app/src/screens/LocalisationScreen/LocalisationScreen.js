import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


export default function LocalisationScreen({navigation}) {
    const onPress = () => {
        navigation.navigate('Login')
    }

    const test = () => {
        navigation.navigate('register')
    }


    return (
        <View style={styles.container}>
            
            <TouchableOpacity onPress={onPress}>
                <Image 
                    onPress={() =>  onPress()}
                    style={styles.image}
                    source={require('../../../img/back.png')}
                />
       
            </TouchableOpacity>
            
            
        </View>
        
       
    )
    
}