import React from "react";

import {Dimensions,ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';
import MapView from "react-native-maps";

import { Platform, StyleSheet } from 'react-native';
import Map from '../components/Map';




export default function HomeScreen({navigation}) {
    const Programme = () => {
        navigation.navigate('Programme')
    }
    const paiement = () => {
        navigation.navigate('paiement')
    }
    const menu = () => {
        navigation.navigate('Menu')
    }
    const Profil = () => {
        navigation.navigate('Programmeblc')
    }
    const bracelet = () => {
        navigation.navigate('Bracelet')
    }
    const { width, height } = Dimensions.get('window')
    const imageStyle = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
      }



    return (
      
        <View style={{ flex: 1, alignItems: 'center', }}>


            <View style={styles.container1}>
                    <Image
                        source={require('../../../img/logo.png')}
                        style={styles.logo}
                    />
                <Image
                    source={require('../../../img/star.png')}
                    style={styles.logo1}
                />
               

            </View>
            <Map></Map>

        <View style={[styles.container6,{marginBottom: Platform.OS === 'android' ? 0 :0}]}>
          <View style={styles.container11}>        
           <View style={styles.searchSection1}>
                    <Image  source={require('../../../img/map.png')} style={styles.searchIcon1} />
                      <TouchableOpacity
                       style={styles.button3}
                        onPress={() =>  test()}>
                       <Text style={styles.buttonTitle4}>Carte</Text>
                     </TouchableOpacity>
            </View>
            <View style={styles.searchSection1}>
                     <Image  source={require('../../../img/users.png')} style={styles.searchIcon1} />
                     <TouchableOpacity
                       style={styles.button3}
                        onPress={() =>  Profil()}>
                       <Text style={styles.buttonTitle3}>Profil</Text>
                        </TouchableOpacity>
            </View>
            <View style={styles.searchSection1}>
                        <Image  source={require('../../../img/loud-speaker-in.png')} style={styles.searchIcon1} />
                        <TouchableOpacity
                       style={styles.button3}
                        onPress={() =>  paiement()}>
                       <Text style={styles.buttonTitle3}>signalement</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
        </View>
    

    )

}







