import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable';
import stylesDefault from '../styles'
import axios from 'axios';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


const ListagemUsuarios = ({ navigation }) => {

    const [usuarios, setUsuarios] = useState([]);

    const buscarUsuarios = async () => {
        axios.get('https://pet-lovers-back-end.vercel.app/usuario/buscar').then((res) => {
            setUsuarios(res.data);
        }).catch(error => {
            console.error('Erro', error.response);
        })
    }

    const excluirUsuario = async (id) => {
        const token = await getStorageItem('token');
        axios.delete(`https://pet-lovers-back-end.vercel.app/usuario/excluir/${id}`, { headers: { Authorization: token } }).then(res => {
            Toast.show({
                type: 'success',
                text1: 'Usuario excluido com sucesso !',
            });
            buscarUsuarios();
        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema...',
            });
            console.error('Erro', error);
        })
    }

    useEffect(() => {
        buscarUsuarios();
    }, [])


    return (
        <ScrollView>

            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Listagem dos Usuarios</Text>
            </KeyboardAvoidingView>
            <StatusBar />

            {usuarios.map((usuario) => (
                <View style={styles.item} key={usuario._id} >
                    {usuario.upload ? (<Image source={{uri:usuario.upload?.link}} style={styles.ifImage}></Image>): (<View style={styles.ifNotImage}></View>)}
                    
                    <View style={{ flex: 1 }}>
                        <Text key={usuario.nome}>{usuario.nome} </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text key={usuario.telefone.numero}>{usuario.telefone.numero}</Text>
                    </View>

                    <Icon.Button name="trash-o"
                        size={20} color="red"
                        backgroundColor='#FFF'
                        onPress={
                            () => excluirUsuario(usuario._id)
                        }

                    > </Icon.Button>
                </View>
            ))}


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    titulo: {
        textAlign: "center", fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF",

    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 15

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    ifNotImage: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    ifImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15,
    },

})


export default ListagemUsuarios;