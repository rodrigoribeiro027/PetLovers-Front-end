import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable';
import stylesDefault from '../styles'
import axios from 'axios';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';


const ListagemUsuarios = ({ navigation }) => {

    const [usuarios, setUsuarios] = useState([]);

    const buscarUsuarios = async () => {
        axios.get('https://pet-lovers-back-end.vercel.app/usuario/buscar').then((res) => {
            setUsuarios(res.data)
        }).catch(error => {
            console.error('Erro', error.response)
        })
    }

    useEffect(() => {
        buscarUsuarios()
    }, [])


    return (
        <>

            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Listagem dos Usuarios</Text>
            </KeyboardAvoidingView>
            <StatusBar />

            {usuarios.map((usuario) => (
                <View style={styles.item} key={usuario.id} >
                    <View style={styles.square}></View>
                    <View style={{ flex: 1 }}>
                        <Text key={usuario.nome}>{usuario.nome} </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text key={usuario.telefone.numero}>{usuario.telefone.numero}</Text>
                    </View>
                </View>
            ))}


        </>
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
    square: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

})


export default ListagemUsuarios;