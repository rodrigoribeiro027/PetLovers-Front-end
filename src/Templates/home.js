
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
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                        <View style={styles.container}>
                            <StatusBar />
                            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => deslogar()} >
                                <Text style={stylesDefault.buttonTextDefault}>Sair</Text>
                            </TouchableOpacity>
                            <Animatable.Text animation='fadeInRight' style={styles.TextPrincipaltextobv}>Seja Bem-Vindo(a)</Animatable.Text>
                            <View style={styles.HomeContainer}>
                                <View style={styles.Texto}>
                                    <Text >Cadastre Seus Pets</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
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
        borderWidth: 1.2,
        borderRadius: 5,
        fontSize: 10,
        backgroundColor: "#D3E5ED",
        marginBottom: 10,
        height: 100,

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
        marginTop: 20
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",

    }

});

export default Home;
