

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, ScrollView, Image
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';
import { useEffect, useState } from 'react';
import axios from 'axios';




const PerfilUsuario = ({ navigation }) => {

    const [usuario, setUsuario] = useState('');

    const buscarUsuario = async () => {
        const token = await getStorageItem('token');
        axios.get('https://pet-lovers-back-end.vercel.app/usuario/buscar-info', { headers: { Authorization: token } }).then(res => {
            setUsuario(res.data);
        }).catch(error => {
            console.error('Erro', error.response);
        })
    }

    useEffect(() => {
        buscarUsuario();
    }, []);

    return (
        <>
            <ScrollView style={styles.screen}>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.containerPerfil}>
                            <StatusBar />
                            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                            </TouchableOpacity>
                            <View style={styles.PerfilContainer}>
                                <View style={styles.linha}>
                                    <Image style={styles.imagenUser} source={{uri: usuario.upload?.link}} />
                                    <TouchableOpacity onPress={() => console.log("config")}>
                                    <Icon name="cog" style={stylesDefault.voltar} size={45} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.TextoCentral}>Informações Pessoais</Text>
                            <View style={styles.PerfilContainer2}>
                                <View style={styles.linha2}>
                                    <Text>Nome: {usuario.nome}</Text>
                                    <Text>Email: {usuario.email}</Text>
                                    <Text>{usuario.documento?.documento.toUpperCase()}: {usuario.documento?.numero}</Text>
                                    <Text>Telefone: {usuario.telefone?.numero}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => console.log("edit")}>
                                        <Icon name="pencil" style={stylesDefault.voltar} size={25} color="black" /> 
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.TextoCentral}>Endereço</Text>
                            <View style={styles.PerfilContainer2}>
                                <View style={styles.linha2}>
                                    <Text>Bairro: {usuario.endereco?.bairro.charAt(0).toUpperCase() + usuario.endereco?.bairro.slice(1)}</Text>
                                    <Text>Rua: {usuario.endereco?.rua.charAt(0).toUpperCase() + usuario.endereco?.rua.slice(1)}</Text>
                                    <Text>Complemento: {usuario.endereco?.complemento.charAt(0).toUpperCase() + usuario.endereco?.complemento.slice(1)}</Text>
                                    <Text>Número: {usuario.endereco?.numero}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => console.log("edit")}>
                                        <Icon name="pencil" style={stylesDefault.voltar} size={25} color="black" /> 
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View >
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>

        </>
    )
};


const styles = StyleSheet.create({
    PerfilContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 5,
        fontSize: 10,
        backgroundColor:'#D3E5ED',
        marginVertical:20,
        padding:5
    },
    linha2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding:10,
        fontSize:5
    },
    screen: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    linha: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerPerfil: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    PerfilContainer: {
        width: '90%',
        borderRadius: 5,
        fontSize: 10,
        height: 100,
        marginVertical:40,
        paddingLeft:10,
        paddingRight:10
    },
    imagenUser: {
        height: 100,
        width: 100,
        borderColor: "#E0E0E0",
        borderRadius: 100,
        backgroundColor: "#E0E0E0"
    },
    TextoCentral: {
        fontWeight: 500,
        fontSize: 25
    },
    bordaPadrao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: "#FFF",
        height: 100,
    }

});

export default PerfilUsuario;
