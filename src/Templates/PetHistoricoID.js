import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import { getStorageItem } from '../functions/encryptedStorageFunctions';
import { COLORS } from '../colors';
import styleDefault from "../styles";


const PetHistoricoID = ({ navigation }) => {
    const [historico, setHistorico] = useState([]);

    const toggleCollapse = (index) => {
        setHistorico((prevHistorico) => {
            const updatedHistorico = [...prevHistorico];
            updatedHistorico[index].isCollapsed = !updatedHistorico[index].isCollapsed;
            return updatedHistorico;
        });
    };

    const formatDate = (data, time=false) => {
        if(time){
            const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(',');
            return formated
        }else{
            const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(' ');
            return formated;
        }
    }

    const buscarHistoricos = async () => {
        const token = await getStorageItem('token');
        const petID = await getStorageItem('pet');
        axios.get(`https://pet-lovers-back-end.vercel.app/historico/buscar-historicos-pet/${petID}`, { headers: { Authorization: token } })
            .then((res) => {
                const historicoComCollapse = res.data.map((pet) => ({
                    ...pet,
                    isCollapsed: true,
                }));
                setHistorico(historicoComCollapse);
            })
            .catch(error => {
                console.error('Erro', error);
            });
    };

    useEffect(() => {
        buscarHistoricos();
    }, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <ScrollView>
            <TouchableOpacity style={styleDefault.buttonVoltarDefault} onPress={() => navigation.navigate("HistoricoAgendamento")} >
                            <Text style={styleDefault.buttonTextDefault}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Historico do Pet</Text>
                {historico.map((pet, index) => (
                    <View key={pet._id} style={{ flex: 1, marginVertical:10 }}>
                        <TouchableOpacity style={styles.registro} onPress={() => toggleCollapse(index)}>
                            <Text style={styles.buttonText}>Registro: {formatDate(pet?.data_registro)}</Text>
                        </TouchableOpacity>
                        {!pet.isCollapsed && (
                            <View style={styles.containerHistorico}>
                                <Text style={styles.PetHistorico}>Nome: {pet.diagnostico ? pet.diagnostico.diagnostico : 'Não informado'}</Text>
                                <Text style={styles.PetHistorico}>Registro: {pet.data_registro ? formatDate(pet?.data_registro, time=true) : 'Não informado'}</Text>
                                <Text style={styles.PetHistorico}>Diagnóstico: {pet.diagnostico ? pet.diagnostico?.descricao : 'Não informado'}</Text>
                                <Text style={styles.PetHistorico}>Tratamento: {pet.tratamento ? pet.tratamento?.tratamento : 'Não informado'}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    containerHistorico: {
        flex: 1,
        backgroundColor: "#399fff",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 5,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    PetHistorico: {
        color: '#FFF',
        fontSize: 17,
        padding: 10
    },
    registro: {
        width: '90%',
        backgroundColor: COLORS.primary,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,

    },
    buttonText: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 18
    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
        marginVertical:30
    },
});

export default PetHistoricoID;
