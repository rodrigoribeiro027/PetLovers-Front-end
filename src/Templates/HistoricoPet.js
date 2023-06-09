import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, Image, ScrollView,
} from 'react-native';
import stylesDefault from "../styles"
import { getStorageItem } from '../functions/encryptedStorageFunctions';
import axios from 'axios';
import Toast from 'react-native-toast-message';


const HistoricoPet = ({ navigation }) => {
    const [tratamento, setTratamento] = useState();
    const [diagnostico, setDiagnostico] = useState();
    const [custo, setcusto] = useState();


    const [agendamento, setAgendamento] = useState('');

    const buscarAgendamento = async () => {
        const token = await getStorageItem('token');
        const id = await getStorageItem('agendamento')
        axios.get(`https://pet-lovers-back-end.vercel.app/agendamento/buscar/${id}`, { headers: { Authorization: token } }).then(async (res) => {
            setAgendamento(res.data);
            console.log(res.data);
        }).catch(error => {
            console.error('Erro', error.response)
        })
    }
    const Cadastrarhistorico = async () => {
        const token = await getStorageItem('token');
        const id = await getStorageItem('agendamento')
        const id_pet = agendamento.id_pet._id
        const dados = {
            tratamento: {
                tratamento: tratamento
            },
            diagnostico: {
                diagnostico: diagnostico
            },
            custo: custo
        }
        axios.post(`https://pet-lovers-back-end.vercel.app/historico/cadastrar/${id_pet}`, dados, { headers: { Authorization: token } }).then(async (res) => {
            // concluirAgendamento(token,id)
        }).catch(error => {
            console.error('Erro', error.response)
        })
    }
    const concluirAgendamento = async (token, id) => {
        axios.put(`https://pet-lovers-back-end.vercel.app/agendamento/concluir/${id}`, { headers: { Authorization: token } }).then(async (res) => {
        }).catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        buscarAgendamento()
    }, [])
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <ScrollView>
                    <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("ListagemAgendamentoFunc")} >
                        <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>Fazer Diagnóstico</Text>
                        <View style={styles.item} key={agendamento._id} >
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text >Tipo de consulta: {agendamento.tipo_Consulta ? agendamento.tipo_Consulta : "Não informado"}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text >Data da consulta: {agendamento.data_agendamento} </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text >Descrição:  {agendamento.complemento}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text >Cliente:  {agendamento.id_usuario?.nome}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text >Pet:  {agendamento.id_pet?.nome}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.historicoContainer}>
                            <Text style={styles.historicoItem}>Diagnóstico:</Text>
                            <TextInput
                                placeholder='Prescrever Diagnóstico'
                                multiline={true}
                                maxLength={300}
                                numberOfLines={5}
                                style={{
                                    backgroundColor: "#E0E0E0",
                                    height: 150,
                                    paddingTop: 8,
                                    textAlignVertical: 'top'
                                }}
                                value={diagnostico}
                                onChangeText={setDiagnostico}
                            />
                            <View>
                                <Text></Text>
                            </View>
                            <Text style={styles.historicoItem}>Tratamento:</Text>
                            <TextInput
                                placeholder='Prescrever Tratamento'
                                multiline={true}
                                maxLength={300}
                                numberOfLines={5}
                                style={{
                                    backgroundColor: "#E0E0E0",
                                    height: 150,
                                    paddingTop: 8,
                                    textAlignVertical: 'top'
                                }}
                                value={tratamento}
                                onChangeText={setTratamento}
                            />
                            <Text style={styles.historicoItem}>Custos do Tratamentos:</Text>
                            <TextInput keyboardType={'numeric'} placeholder='Prescrever Custos' style={styles.input} value={custo}
                                onChangeText={e => setcusto(e)}>
                            </TextInput>
                            <TouchableOpacity style={styles.AgendamentoButon} onPress={() => { Cadastrarhistorico() }}>
                                <Text style={styles.AgendamentoButonText} onPress={() => navigation.navigate("Home")}>Agendar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 20
    },
    input: {
        backgroundColor: "#E0E0E0",
        width: '100%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    AgendamentoButon: {
        width: '100%',
        marginTop: '2%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    AgendamentoButonText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: 'bold'

    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 10
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    historicoItem: {
        color: 'black',
        fontSize: 17,
        marginBottom: 5,
    },
    caixaTexto: {
        backgroundColor: '#FFFF',
        padding: 10,
        borderRadius: 5,
    },
    textoDescricao: {
        fontSize: 18,
    },
    button: {
        backgroundColor: '#399fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    collapsibleContent: {
        backgroundColor: '#EEE',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
});

export default HistoricoPet;
