import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from '../styles';
import axios from 'axios';
import { getStorageItem, storageItem } from '../functions/encryptedStorageFunctions.js';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';

const ListagemAgendamentoFunc = ({ navigation }) => {
    const [agendamentos, setAgendamentos] = useState([]);
    const [selectedValue, setSelectedValue] = useState("todos");

    const buscarAgendamentos = async () => {
        const token = await getStorageItem("token")
        let url = "https://pet-lovers-back-end.vercel.app/agendamento/buscar";
        if (selectedValue === "andamento") {
            url = "https://pet-lovers-back-end.vercel.app/agendamento/buscar-andamento";
        }
        if (selectedValue === "concluido") {
            url = "https://pet-lovers-back-end.vercel.app/agendamento/buscar-concluido";
        }
        axios.get(url, { headers: { Authorization: token } }).then(res => {
            console.log(res.data)
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
    }, [selectedValue]);

    useFocusEffect(
        React.useCallback(() => {
            buscarAgendamentos();
        }, [])
    );

    return (
        <ScrollView>
            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <View style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Agendamentos</Text>
            </View>
            <StatusBar />

            <Picker
                selectedValue={selectedValue}
                style={{ ...stylesDefault.input, borderWidth: 0, marginBottom: 40 }}
                onValueChange={(e) => setSelectedValue(e)}
            >
                <Picker.Item key={"todos"} label={"Todos"} value={"todos"} />
                <Picker.Item key={"andamento"} label={"Em andamento"} value={"andamento"} />
                <Picker.Item key={"concluido"} label={"Concluidos"} value={"concluido"} />
            </Picker>

            {agendamentos.map(agendamento => (
                <TouchableOpacity onPress={() => selecionarAgendamento(agendamento._id)} key={agendamento._id}>
                    <View style={styles.item}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Text >Tipo de consulta: {agendamento.tipo_Consulta ? agendamento.tipo_Consulta : "Não informado"}</Text>
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
    );
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 30
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
});

export default ListagemAgendamentoFunc;
