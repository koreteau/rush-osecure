import React, { useState } from 'react'

import {Icon,Dimensions, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebaseApp} from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function ProgrammeblcScreen({navigation}) {
   
    const home = () => {
        navigation.navigate('Home')
    }
    const paiement = () => {
        navigation.navigate('paiement')
    }
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;
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
            <Text style={styles.titre}>Paramètres</Text>
        <View style={styles.button}>
            <Text style={styles.buttonTitle1}>A propos de vous</Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.buttonTitle1}>E-mail : {email}</Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.buttonTitle1}>Confidencialité</Text>
        </View>
        
        <View style={[styles.container6,{marginBottom: Platform.OS === 'android' ? 0 :0}]}>
          <View style={styles.container11}>        
           <View style={styles.searchSection1}>
                    <Image  source={require('../../../img/map-in.png')} style={styles.searchIcon1} />
                      <TouchableOpacity
                       style={styles.button3}
                        onPress={() =>  home()}>
                       <Text style={styles.buttonTitle3}>carte</Text>
                     </TouchableOpacity>
            </View>
            <View style={styles.searchSection1}>
                     <Image  source={require('../../../img/users-in.png')} style={styles.searchIcon1} />
                     <TouchableOpacity
                       style={styles.button3}
                        onPress={() =>  Profil()}>
                       <Text style={styles.buttonTitle4}>Profil</Text>
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