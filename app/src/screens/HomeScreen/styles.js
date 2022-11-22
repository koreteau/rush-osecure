import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      
    },
    container1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
       
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,


elevation: 3,
        backgroundColor: 'white',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        
    },
    container11: {
        color: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        
        marginTop: 0,
        display: 'flex', 
    },
    container6: {
        position: 'absolute',
        bottom:0,
        left:0,
        marginBottom: -30,
       
       

        
    },
    container4: {
        flexDirection: 'row',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',

        
    },
    img1:{
       width: '50%',

    },
    container2: {
        
        backgroundColor:'white',
        
    },
    titre: {
        width: '50%',
        textAlign: 'center',
        color: 'black',
        marginTop: 30,
        fontWeight: 'bold',
        marginRight: 150,
        fontSize: 22,
        marginBottom: 30,
      },

    second: {
        width: '85%',
        padding: 10,
        textAlign: 'center',
        color: '#616161',
        fontSize: 16,
        marginBottom: 15,
      },

    logo: {
        width: '60%',
        height: '60%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    logo1: {
        
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
     
    input1: {
        height: 48,
        borderRadius: 6,
        overflow: 'hidden',
        width: '60%',
        backgroundColor: 'white',
        
        elevation: 20,
        shadowColor: 'grey',
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 0,
        marginBottom: 25,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10
    },
    searchIcon: {
    padding: 0,
    },
    searchIcon1: {
        color: 'black',
      
        marginRight: 0,
        },
    searchSection: {
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 54,
        borderRadius: 6,
        overflow: 'hidden',
        width: '80%',
        backgroundColor: 'white',
        
        
        shadowColor: 'grey',
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 0,
        marginBottom: 25,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10
        
    },
    searchSection1: {
        marginBottom: 10,
        flexDirection: 'column',    
        justifyContent: 'center',
        alignItems: 'center',
        
        height: 54,
        borderRadius: 2,
        overflow: 'hidden',
        width: '33.333%',
       
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 20,
        
        
       
        
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
        
    },
    button: {
        padding : 10,
        elevation: 20,
        shadowColor: 'grey',
        backgroundColor: '#34CCA8',
        borderWidth: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 35,
        paddingRight: 35,
        width: '75%',
        height: 48,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
       
    },
    button1: {
        padding : 10,
        borderBottomColor:'4D8D6E',
        color: '#4D8D6E',
        borderColor: '#4D8D6E',
        borderBottomWidth: 2,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 35,
        paddingRight: 35,
        
        height: 48,
     
        alignItems: "center",
        justifyContent: 'center'
    },
    button2: {
        padding : 10,
       
        borderBottomWidth: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 35,
        paddingRight: 35,
       
        height: 48,
     
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonTitle1: {
        color: '#4D8D6E',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonTitle2: {
        color: '#AFCCBE',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonTitle3: {
        color: '#B7B7B7',
        fontSize: 15,  
    },
    buttonTitle4: {
        color: '#73D9C0',
        fontSize: 15,  
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        textDecorationLine: 'underline',
        marginTop: 20
    },
    footerText: {
        fontSize: 12,
        color: '#2e2e2d',
        marginBottom: 30,
        paddingLeft: 180,
       
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    trois: {
        marginTop: 30,
        marginBottom: 20,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    quatre: {
        textDecorationLine: 'underline',
    },
    contain:{
        flex: 1,
        
        height: 1000,
        width: '100%',
    }
})