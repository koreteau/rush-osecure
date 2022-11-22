import React, { useState } from 'react'

import {Icon,Dimensions, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebaseApp} from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export default function BraceletScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(firebaseApp)

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
const Programmeblc = () => {
    navigation.navigate('Programmeblc')

}

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);

                navigation.navigate('Home')

            })
            .catch(error => alert(error.message))
    }
    const { width, height } = Dimensions.get('window')
    const imageStyle = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
      }

    return (
        
        <View style={styles.container}>
           
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
            
 
         
            <Text style={styles.titre}>Formulaire de signalement</Text>
           
            <View style={styles.searchSection}>
           
            <TextInput
                style={[styles.input,  styles.shadowProp]}
                
                placeholder='Adresse d’incident'
                placeholderTextColor="#34CCA8"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            
            </View>
            <View style={styles.searchSection2}>
          
            <TextInput
                style={styles.input2}
                placeholderTextColor="#34CCA8"
                secureTextEntry
                placeholder='Description de l’incident'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            </View>
        
           
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}>
                <Text style={styles.buttonTitle}>Signaler un problème</Text>
            </TouchableOpacity>
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