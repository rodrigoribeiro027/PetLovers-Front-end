import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, ScrollView, Image
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles.js"
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PetHistoricoID = ({ navigation }) => {

    return (

        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <ScrollView>
                    <Text style={styles.titulo}>Historico do Pet</Text>

                </ScrollView>
            </KeyboardAvoidingView>
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
        marginTop: 10,
        backgroundColor: '#D3E5ED',
        marginBottom: 10,
        padding: 5
    },
    linha2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        fontSize: 5
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
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10
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
        fontSize: 25,
        marginTop: 5
    },
    bordaPadrao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: "#FFF",
        height: 100,
    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 10
    },

});

export default PetHistoricoID;
