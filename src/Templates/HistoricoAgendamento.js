
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, Image, ScrollView,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import { getStorageItem, storageItem } from '../functions/encryptedStorageFunctions.js';
import axios from 'axios';
import styleDefault from "../styles";


const HistoricoAgendamento = ({ navigation }) => {
    const [pets, setPets] = useState([]);

    const buscarPets = async () => {
        const token = await getStorageItem('token');
        axios.get('https://pet-lovers-back-end.vercel.app/pet/buscar-pets-usuario', { headers: { Authorization: token } }).then(async (res) => {
            setPets(res.data);
        }).catch(error => {
            console.error('Erro', error.response)
        })
    }

    const selecionarPet = async (id) => {
        try {
            await storageItem('pet',id)
            navigation.navigate('PetHistoricoID')
        } catch (error) {
            console.error('Erro', error.response)
        }
    }

    useEffect(() => {
        buscarPets()
    }, [])

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <ScrollView>
                <TouchableOpacity style={styleDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                            <Text style={styleDefault.buttonTextDefault}>Voltar</Text>
                </TouchableOpacity>
                    <Text style={styles.titulo}>Listagem dos Pets</Text>
                    <Text style={styles.selecione}>Selecione um pet para ver o Historico</Text>
                    {
                        pets.map((pet) => (
                            <TouchableOpacity key={pet._id} onPress={() =>selecionarPet(pet._id) }>
                                <View style={styles.item} key={pet._id}>
                                    <Image style={styles.ifImage} source={{ uri: pet.upload.link }}></Image>
                                    <View style={{ flex: 1 }}>
                                        <Text>{pet.nome ? pet.nome : 'Não informado'}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
};


const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 10
    },
    selecione: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 10
    },
    TextoCentral: {
        fontWeight: 800,
        fontSize: 30,
        marginBottom: 10,
        marginTop: 10
    },
    DropDown: {
        backgroundColor: '#F4F3F3',
        width: '90%',
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1
    },
    PetHistorico: {
        color: '#FFF',
        fontSize: 17,
        padding: 10
    },
    buttonDefaultHist: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    containerHistorico: {
        width: "90%",
        backgroundColor: "#399fff",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
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
});

export default HistoricoAgendamento;
