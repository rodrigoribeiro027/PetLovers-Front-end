
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
                                <Text style={stylesDefault.buttonTextDefault}>Logout</Text>
                            </TouchableOpacity>
                            <Animatable.Text animation='fadeInRight' style={styles.TextPrincipaltextobv}>Seja Bem-Vindo(a)</Animatable.Text>
                            <Animatable.Image animation='fadeInUp' source={require("../assets/Welcome.png")} style={styles.imgpets} />
                            <Animatable.View animation='fadeInRight' style={styles.divButton}>
                                <TouchableOpacity style={styles.menuUsuario} onPress={() => navigation.navigate("AgendarConsulta")}>
                                    <Text style={styles.menuUsuarioText} >Agendar Consulta</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuUsuario} onPress={() => navigation.navigate("MeusPets")}>
                                    <Text style={styles.menuUsuarioText} >Meus Pets</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuUsuario} onPress={() => navigation.navigate("Servicos")}>
                                    <Text style={styles.menuUsuarioText} >Servicos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuUsuario} onPress={() => navigation.navigate("Home")}>
                                    <Text style={styles.menuUsuarioText} >Historico de Agendamentos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuUsuario} onPress={() => navigation.navigate("Usuarios")}>
                                    <Text style={styles.menuUsuarioText} >Listagem de Usuarios</Text>
                                </TouchableOpacity>

                            </Animatable.View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
};
const styles = StyleSheet.create({
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
    imgpets: {
        width: '100%',
        height: 390,
    },
    menuUsuario: {
        width: '90%',
        marginTop: '5%',
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
