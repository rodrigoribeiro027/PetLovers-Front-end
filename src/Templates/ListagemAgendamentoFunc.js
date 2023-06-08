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
import { getStorageItem, storageItem } from '../functions/encryptedStorageFunctions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from 'react-native-toast-message/lib/src/Toast';



const ListagemAgendamentoFunc = ({ navigation }) => {
    const [agendamentos, setAgendamentos] = useState([]);

    const formatDate = (data, time=false) => {
        if(time){
            const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(',');
            return formated
        }else{
            const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(' ');
            return formated;
        }
    }

    const buscarAgendamentos = async () => {
        const token = await getStorageItem("token")

        axios.get("https://pet-lovers-back-end.vercel.app/agendamento/buscar", { headers: { Authorization: token } }).then(res => {;
            setAgendamentos(res.data);
        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema...',
            });
            console.error('Erro', error);
        })
    }

    const selecionarAgendamento = async (id) => {
        try {
            await storageItem('agendamento', id);
            navigation.navigate('HistoricoPet');
        } catch (error) {
            console.error('Erro', error.response);
        }
    }

    useEffect(() => {
        buscarAgendamentos();
    }, [])

    return (
        <ScrollView>

            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Agendamentos</Text>
            </KeyboardAvoidingView>
            <StatusBar />

            {agendamentos.map(agendamento => (
                <TouchableOpacity onPress={() => selecionarAgendamento(agendamento._id)} >
                    <View style={styles.item} key={agendamento._id} >
                        <View style={{ flex: 1 }}>

                            <View style={{ flex: 1 }}>
                                <Text >Tipo de consulta: {agendamento.tipo_Consulta ?  agendamento.tipo_Consulta : "Não informado"}</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text >Data da consulta: {agendamento.data_agendamento} </Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text >Horario: {agendamento.horario}</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text >Status: {agendamento.status}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
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

export default ListagemAgendamentoFunc