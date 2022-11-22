import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function PaiementScreen({navigation}) {

    const home = () => {
        navigation.navigate('Home')
    }
    const Programmeblc = () => {
        navigation.navigate('Programmeblc')
    }
    const Tab = createBottomTabNavigator();

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
    <Text style={styles.titre}>Sélectionner votre signalement</Text>
    <View style={styles.container2}>
      <Image source={require('../../../img/signalement.png')} style={styles.searchIcon2} />
      <Text style={styles.titre1}>Signaler Un Problème</Text>
       <TouchableOpacity
        style={styles.button}
        onPress={() =>  bracelet()}>
        <Text style={styles.text2}>Remplissez le formulaire</Text>
       </TouchableOpacity>
    </View>
    <View style={styles.container3}>
        <Text style={styles.titre2}>Signalement</Text>
        <Text style={styles.trois}>Pour effectuer un signalement vous devez possédé un compte sur la plateforme</Text>
        <Text style={styles.quatre}>Veuillez vous connecter pour continuer votre signalement .</Text>
    </View>

    <View style={[styles.container6,{marginBottom: Platform.OS === 'android' ? 0 :0}]}>
      <View style={styles.container11}>        
       <View style={styles.searchSection1}>
                <Image  source={require('../../../img/map-in.png')} style={styles.searchIcon1} />
                  <TouchableOpacity
                   style={styles.button3}
                    onPress={() =>  home()}>
                   <Text style={styles.buttonTitle3}>Carte</Text>
                 </TouchableOpacity>
        </View>
        <View style={styles.searchSection1}>
                 <Image  source={require('../../../img/users.png')} style={styles.searchIcon1} />
                 <TouchableOpacity
                   style={styles.button3}
                    onPress={() =>  Programmeblc()}>
                   <Text style={styles.buttonTitle3}>Profil</Text>
                    </TouchableOpacity>
        </View>
        <View style={styles.searchSection1}>
                    <Image  source={require('../../../img/loud-speaker.png')} style={styles.searchIcon1} />
                    <TouchableOpacity
                   style={styles.button3}
                    onPress={() =>  paiement()}>
                   <Text style={styles.buttonTitle4}>signalement</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </View>
    </View>


)

    

}