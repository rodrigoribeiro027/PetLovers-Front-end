import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from '../styles';
import axios from 'axios';
import { getStorageItem, storageItem } from '../functions/encryptedStorageFunctions.js';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS } from '../colors.js';


const ListagemAgendamentoCli = ({ navigation }) => {
    const [agendamentos, setAgendamentos] = useState([]);
    const [selectedValue, setSelectedValue] = useState("todos");

    const buscarAgendamentos = async () => {
        const token = await getStorageItem("token");

        axios.get("https://pet-lovers-back-end.vercel.app/agendamento/buscar-cliente", { headers: { Authorization: token } }).then(res => {
            let dados = res.data;
            if (selectedValue === "andamento") {
                dados = dados.filter(agendamento => agendamento.status === "andamento");
            }
            if (selectedValue === "concluido") {
                dados = dados.filter(agendamento => agendamento.status === "concluido");
            }
            setAgendamentos(dados);
        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema...',
            });
            console.error('Erro', error);
        })
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
        <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <View style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Agendamentos</Text>
            </View>
            <StatusBar />

            <Picker
                selectedValue={selectedValue}
                style={styles.selectInput}
                onValueChange={(e) => setSelectedValue(e)}
            >
                <Picker.Item key={"todos"} label={"Todos"} value={"todos"} />
                <Picker.Item key={"andamento"} label={"Em andamento"} value={"andamento"} />
                <Picker.Item key={"concluido"} label={"Concluidos"} value={"concluido"} />
            </Picker>

            {agendamentos.map(agendamento => (

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
    selectInput: {
        backgroundColor: COLORS.white,
        width: '90%',
        padding: 15,
        borderColor: "#E0E0E0",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    }
});

export default ListagemAgendamentoCli;
