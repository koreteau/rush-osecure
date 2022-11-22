import React, {useEffect, useState} from 'react'
import {Dimensions, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebaseApp} from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";





export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName, ] = useState('')
    const [ prenom,setPrenom] = useState('')
    const [ Num,setNum] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }


    const auth = getAuth(firebaseApp)
    const { width, height } = Dimensions.get('window')
    const imageStyle = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                // Signed in
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })

            .catch(error => alert(error.message))
    }





    return (
        
        <View style={styles.container}>
            
            <Image
                style={styles.logo}
                source={require('../../../img/logo.png')}
            />
            <View style={styles.containe}>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() =>  onFooterLinkPress()}>
                    <Text style={styles.buttonTitle2}>Se Connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => lis()}>
                    <Text style={styles.buttonTitle1}>Commencer</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.titre}>Créer un compte</Text>
            <View style={styles.searchSection}>
            <Image style={styles.searchIcon} source={require('../../../img/mail.png')}/>
            <TextInput
                style={styles.input}
                placeholderTextColor="#707070"

                placeholder='E-mail'
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
                placeholder='Créer un mot de passe'
                onChangeText={(text) => setPassword(text)}
                value={password}
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
                placeholder='Réécrivez le'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}>
                <Text style={styles.buttonTitle}>Créer son compte</Text>
            </TouchableOpacity>
           
            <Text style={styles.trois}>En créant un compte, vous accepter les</Text>
            <Text style={styles.quatre}> Conditions générales d’utilisation.</Text>
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