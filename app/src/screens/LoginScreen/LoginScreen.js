import React, { useState } from 'react'

import {Icon,Dimensions, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebaseApp} from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(firebaseApp)

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
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
           
            <Image
                style={styles.logo}
                source={require('../../../img/logo.png')}
            />
            
 
           <View style={styles.containe}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() =>  test()}>
                    <Text style={styles.buttonTitle1}>Se Connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => onFooterLinkPress()}>
                    <Text style={styles.buttonTitle2}>Commencer</Text>
                </TouchableOpacity>
            </View>
         
            <Text style={styles.titre}>Se connecter</Text>
           
            <View style={styles.searchSection}>
            <Image style={styles.searchIcon} source={require('../../../img/mail.png')}/>
            <TextInput
                style={[styles.input,  styles.shadowProp]}
                
                placeholder='E-mail'
                placeholderTextColor="#707070"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            
            </View>
            <View style={styles.searchSection}>
            <Image style={styles.searchIcon} source={require('../../../img/lock.png')}/>
            <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                secureTextEntry
                placeholder='Mot de passe'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            </View>
        
            <Text  onPress={onFooterLinkPress}  style={styles.footerText}>Mot de passe oublié ?</Text>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}>
                <Text style={styles.buttonTitle}>Se connecter</Text>
            </TouchableOpacity>
            <View style={styles.container4}>
            <Image style={styles.img} source={require('../../../img/lin.png')}/>
            <Text style={styles.trois}>ou se connecter avec</Text>
            <Image style={styles.img} source={require('../../../img/lin.png')}/>
            </View>
            <View style={styles.container1}>
                <View style={styles.searchSection1}>
                <Image style={styles.searchIcon1} source={require('../../../img/google.png')}/>
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() =>  test()}>
                    <Text style={styles.buttonTitle3}>Google</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.searchSection1}>
                <Image style={styles.searchIcon1} source={require('../../../img/apple.png')}/>
                <TouchableOpacity
                    style={styles.button4}
                    onPress={() => onPress()}>
                    <Text style={styles.buttonTitle3}>Apple</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
   
    )
}