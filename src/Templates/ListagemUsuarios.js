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


    return (
        <>

            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Listagem dos Usuarios</Text>
            </KeyboardAvoidingView>
                <StatusBar/>

                    <View style={styles.item}>
                        <View style={styles.square}></View>
                        <View style={{ flex: 1 }}>
                            <Text>Nicolas</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>129111111</Text>
                        </View>
                    </View>

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