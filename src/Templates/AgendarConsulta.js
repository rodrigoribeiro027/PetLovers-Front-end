
import React, { useEffect, useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View, TextInput,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Icon, ScrollView, ToastAndroid
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import DateTimePicker from "@react-native-community/datetimepicker";
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"
import { Picker } from '@react-native-picker/picker';
import { getStorageItem, storageItem } from '../functions/encryptedStorageFunctions.js';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const AgendarConsulta = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Data');
    const [text2, setText2] = useState('Hora:');
    const [selectedValue, setSelectedValue] = useState("");
    const [pets, setPets] = useState([])
    const [tipo_Consulta, setTipo_Consulta] = useState("");
    const [complemento, setComplemento] = useState("");
    
    const setToast = (msg) => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    const buscarPets = async () => {
        const token = await getStorageItem('token');
        axios.get('https://pet-lovers-back-end.vercel.app/pet/buscar-pets-usuario', { headers: { Authorization: token } }).then(async (res) => {
            setPets(res.data);
        }).catch(error => {
            console.error('Erro', error.response)
        })
    }

    useEffect(() => {
        buscarPets()
    }, [])
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate)
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Marcado: ' + tempDate.getHours() + ' Horas e ' + tempDate.getMinutes() + ' Minutos: ';
        setText(fDate)
        setText2(fTime)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode);
    }

    const cadastrarAgendamento = async () => {
        const token = await getStorageItem('token');
        const data = {
            tipo_Consulta: tipo_Consulta,
            complemento: complemento,
            id_pet: selectedValue,
            data_agendamento: text,
            horario: text2,
        };
        axios.post('https://pet-lovers-back-end.vercel.app/agendamento/cadastrar', data, { headers: { Authorization: token } })
            .then(response => {
                console.log('Consulta cadastrada com sucesso:', response.data);
                Toast.show({
                    type: 'success',
                    text1: 'Cadastro Realizado com Sucesso.',
                });
            })
            .catch(error => {
                console.error('Erro ao cadastrar consulta:', error.response);
                Toast.show({
                    type: 'error',
                    text1: 'Ocorreu algum problema',
                });
            });
    };

    return (
        <>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                    <StatusBar />
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Animatable.View style={styles.container}>
                            <TouchableOpacity style={styles.VoltarButon} onPress={() => navigation.navigate("Home")} >
                                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                            </TouchableOpacity>
                            <Animatable.Text animation='fadeInRight' style={styles.TextPrincipalAgendamento}>Criar Agendamento</Animatable.Text>

                            <View style={styles.espacoagendamento}></View>

                            <TextInput placeholder='Tipo de Consulta' value={tipo_Consulta}
                                onChangeText={setTipo_Consulta}
                                style={styles.input}>
                            </TextInput>
                            <TextInput
                                placeholder='Complemento'
                                multiline={true}
                                maxLength={300}
                                numberOfLines={5}
                                style={{
                                    ...stylesDefault.input,
                                    height: 150,
                                    paddingTop: 8,
                                    textAlignVertical: 'top'
                                }}
                                value={complemento}
                                onChangeText={setComplemento}
                            />
                            <View style={styles.DataButon}>
                                <Button title='Data da Consulta' onPress={() => showMode('date')} />
                                <Text style={styles.TextDataHora}>{text}</Text>
                                <Button title='Horario' onPress={() => showMode('time')} />
                                <Text style={styles.TextDataHora}>{text2}</Text>
                            </View>
                            {show && (
                                <DateTimePicker testID='dateTimePicker' value={date} mode={mode}
                                    is24Hour={true} display='default' onChange={onChange}
                                />
                            )}
                            <Picker
                                selectedValue={selectedValue}
                                style={{ ...stylesDefault.input, borderWidth: 0, marginBottom: 40 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue._id)}
                            >
                                {pets.map((pet) => (
                                    <Picker.Item key={pet.id} label={pet.nome} value={pet} />
                                ))}
                            </Picker>

                            <TouchableOpacity style={styles.AgendamentoButon} onPress={cadastrarAgendamento} >
                                <Text style={styles.AgendamentoButonText} onPress={() => navigation.navigate("Home")}>Agendar</Text>
                            </TouchableOpacity>

                        </Animatable.View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
};
const styles = StyleSheet.create({
    containerStart: {
        width: "100%",
    },
    AgendamentoButon: {
        width: '90%',
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
    TextDataHora: {
        color: "black",
        fontSize: 20,

    },
    espacoagendamento: {
        width: '90%',
        marginTop: 20
    },
    DataButon: {
        width: '90%',

    },
    DataButonText: {
        color: "#FFF",
        fontSize: 17
    },
    TextPrincipalAgendamento: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    }, menuUsuario: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    menuUsuarioText: {
        color: "#FFF",
        fontSize: 17
    },
    input: {
        backgroundColor: "#F4F3F3",
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
});

export default AgendarConsulta;
