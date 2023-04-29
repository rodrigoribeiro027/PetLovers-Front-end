
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ScrollView
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable';
import stylesDefault from '../styles'
import { clearStorageItem, getStorageItem } from '../functions/encryptedStorageFunctions.js';


const Home = ({ navigation }) => {


    const deslogar = async () => {
        const token = await getStorageItem('token')
        if (token) {
            await clearStorageItem('token');
        }
        navigation.navigate("Login")
    }


    return (
        <>
            <ScrollView style={styles.screen}>
                
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >

                        <View style={styles.container}>
                            <StatusBar />
                            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => deslogar()} >
                                <Text style={stylesDefault.buttonTextDefault}>Sair</Text>
                            </TouchableOpacity>
                            <Animatable.Text animation='fadeInRight' style={styles.TextPrincipaltextobv}>Seja Bem-Vindo(a)</Animatable.Text>
                            <View style={styles.HomeContainer}>
                                <View style={styles.Texto}>
                                    <Text ></Text>
                                </View>
                            </View>

                            <View style={styles.options}>
                                <View style={styles.optionBtn}>
                                    <Text ></Text>
                                </View>

                                <View style={styles.optionBtn}>
                                    <Text ></Text>
                                </View>
                            </View>

                            <View style={styles.options}>
                                <View style={styles.optionBtn}>
                                    <Text ></Text>
                                </View>

                                <View style={styles.optionBtn}>
                                    <Text ></Text>
                                </View>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                
            </ScrollView>
        </>
    )
};
const styles = StyleSheet.create({
    texto:{
        color:'red',
    },
    HomeContainer: {
        marginTop: 25,
        width: '90%',
        borderRadius: 5,
        fontSize: 10,
        backgroundColor: "#D3E5ED",
        marginBottom: 10,
        height: 150
    },
    options:{
        display: 'flex',
        flexDirection:'row',
        marginTop: 25,
        fontSize: 10,
        marginBottom: 10,
        height: 110,
        width: '90%',
        justifyContent:'space-between'
    },
    optionBtn:{
        backgroundColor:"#D3E5ED",
        borderRadius: 5,
        width: '45%'
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    containerStart: {
        width: "100%",
    },
    espaco: {
        width: '90%',
        marginTop: 170
    },
    divButton: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    menuUsuario: {
        width: '90%',
        marginTop: '5%',
        marginBottom: 5,
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    menuUsuarioText: {
        color: "#FFF",
        fontSize: 17
    },
    TextPrincipaltextobv: {
        fontFamily: "Inter",
        fontWeight: 800,
        fontSize: 30,
        marginTop: 40,
        marginBottom:15
    },
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    screen:{
        flex:1,
        backgroundColor: "#FFF"
    },

    

});

export default Home;
