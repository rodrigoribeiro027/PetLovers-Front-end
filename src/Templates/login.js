
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View, TextInput,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Icon,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable';
import stylesDefault from '../styles';
import axios from "axios";
import Toast from 'react-native-toast-message';
import { storageItem } from '../functions/encryptedStorageFunctions.js';



const Login = ({ navigation }) => {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = () => {
        const dados = {
            email: email,
            senha: senha
        }

        axios.post('https://pet-lovers-back-end.vercel.app/login', dados).then(async (res) => {
            const token = res.headers.authorization;
            const acesso = res.data.permissao;
            try {
                await storageItem('token', token);
                await storageItem('acesso', acesso);
                navigation.navigate('Home')
            } catch (error) {
                console.error('Erro ao salvar token:', error);
            }

        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Email ou Senha incorretos',
            });
            console.error('Erro', error.response)
        })
    }



    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Animatable.View style={styles.container}>
                        <StatusBar />
                        <Animatable.Text animation='fadeInRight' style={styles.TextPrincipal}>PetLovers</Animatable.Text>
                        <Animatable.Image animation='fadeInUp' source={require("../assets/pets.png")} style={styles.imgpets} />
                        <Animatable.View animation='fadeInUp' style={styles.div}>

                            <TextInput
                                placeholder='Email'
                                style={styles.input}
                                value={email}
                                onChangeText={e => setEmail(e)}
                            />

                            <TextInput
                                placeholder='Senha'
                                secureTextEntry={true}
                                style={styles.input}
                                value={senha}
                                onChangeText={e => setSenha(e)}
                            />

                            <View style={styles.esqueceuSenha}>
                                <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
                                    <Text style={styles.esqueceuSenhaText}>Esqueceu sua senha?</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.loginButon} onPress={() => logar()}>
                                <Text style={stylesDefault.buttonTextDefault} >Acessar</Text>
                            </TouchableOpacity>

                            <View style={styles.criarConta}>
                                <TouchableOpacity onPress={() => navigation.navigate("CadastrarUsuario")}>
                                    <Text style={styles.criarContaText}>Cadastre sua Conta</Text>
                                </TouchableOpacity>
                            </View>

                        </Animatable.View>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};


const styles = StyleSheet.create({
    div: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    }, imgpets: {
        width: '100%',
        height: 310,
    },
    input: {
        backgroundColor: "#F4F3F3",
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    loginButon: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    esqueceuSenha: {
        width: '90%',
        alignItems: "flex-end"
    },
    esqueceuSenhaText: {
        color: "#399fff"
    },
    TextPrincipal: {
        fontWeight: 800,
        fontSize: 64
    },
    criarConta: {
        width: '90%',
        alignItems: "center"
    },
    criarContaText: {
        color: "#399fff",
        fontWeight: 800,
        height: 75, marginTop: '3%',
    }
});

export default Login;
