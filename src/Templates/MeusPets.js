import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable';
import stylesDefault from '../styles'
import axios from 'axios';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';


const MeusPets = ({ navigation }) => {

    const [pets, setPets] = useState([]);

    const buscarPets = async () => {
        const token = await getStorageItem('token');
        axios.get('https://pet-lovers-back-end.vercel.app/pet/buscar-pets-usuario', { headers: { Authorization: token } }).then((res) => {
            setPets(res.data);
        }).catch(error => {
            console.error('Erro', error.response)
        })
    }


    useEffect(() => {
        buscarPets()
    }, [])


    return (
        <ScrollView>
            <StatusBar />
            <View style={styles.container}>
                <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                    <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                </TouchableOpacity>
                <Animatable.Text animation='fadeInRight' style={styles.TextPrincipal}>Meus Pets</Animatable.Text>
                <TouchableOpacity style={{ ...styles.VoltarButon, ...styles.novoPets }} onPress={() => navigation.navigate('CadastrarPet')} >
                    <Text style={stylesDefault.buttonTextDefault} >Cadastrar Novo Pet</Text>
                </TouchableOpacity>

                {
                    pets.map((pet) => (
                        <View style={styles.meusPets}>
                            <View style={styles.viewPetImage}>
                            <Animatable.Image animation='fadeInUp' source={{uri:pet.upload.link}} style={styles.meusImgPets} />
                            </View>
                            <View style={styles.containerCard}>
                                <Text style={styles.textoPet}>Nome: {pet.nome ? pet.nome : 'Não informado'}</Text>
                                <Text style={styles.textoPet}>Idade: {pet.idade ? pet.idade : 'Não informado'}</Text>
                                <Text style={styles.textoPet}>Tamanho do Pet: {pet.tamanho ? pet.tamanho : 'Não informado'}</Text>
                                <Text style={styles.textoPet}>Raça: {pet.raca ? pet.raca : 'Não informado'} </Text>
                            </View>
                        </View>
                    ))
                }

            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    novoPets: {
        width: '90%',
        borderRadius: 10,
        marginVertical: 20
    },
    viewPetImage: {
        flex: 0.5,
        height: '100%'
    },
    meusPets: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        alignItems: 'center',
        height: 150,
        marginBottom: 30
    },
    textoPet: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,
    },
    containerCard: {
        width: '100%',
        backgroundColor: "#fff",
        flex: 0.5,
        alignItems: 'flex-start'
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
    },
    espaco: {
        width: '90%',
        marginTop: 70
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        height: '100%'
    },
    input: {
        display: 'flex',
        backgroundColor: "#F4F3F3",
        width: '90%',
        height: 50,
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
    TextPrincipal: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 45,
        marginTop: 20
    },
    meusImgPets: {
        width: '100%',
        height: '100%'
    },
    espacamento: {
        width: '90%',
        marginTop: '10%',
        paddingBottom: '10%',
        fontSize: 20
    }
});

export default MeusPets;
