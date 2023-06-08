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



const ListagemAgendamentoFunc = ({ navigation }) => {
    return (
        <ScrollView>

            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Agendamentos</Text>
            </KeyboardAvoidingView>
            <StatusBar />

            <TouchableOpacity  onPress={() => navigation.navigate("HistoricoPet")} >
            <View style={styles.item} >
                    {/* {usuario.upload ? (<Image source={{uri:usuario.upload?.link}} style={styles.ifImage}></Image>): (<View style={styles.ifNotImage}></View>)} */}
                    
                    <View style={{ flex: 1 }}>
                        <Text>das </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text >dsa</Text>
                    </View>

                    <Icon.Button name="trash-o"
                        size={20} color="red"
                        backgroundColor='#FFF'
                        onPress={
                            () => console.log('usuario._id')
                        }

                    > </Icon.Button>
                </View>
                </TouchableOpacity>

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

export default ListagemAgendamentoFunc