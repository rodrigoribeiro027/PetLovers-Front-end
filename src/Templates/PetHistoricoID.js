import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, ScrollView, Image
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import { getStorageItem, clearStorageItem } from '../functions/encryptedStorageFunctions.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PetHistoricoID = ({ navigation }) => {
    const [historico, setHistorico] = useState([])

    const buscarHistoricos = async () => {
        const token = await getStorageItem('token');
        const petID = await getStorageItem('pet')
        axios.get(`https://pet-lovers-back-end.vercel.app/historico/buscar-historicos-pet/${petID}`, { headers: { Authorization: token } }).then((res) => {
            setHistorico(res.data);
            console.log(res.data)
            clearStorageItem('pet')
        }).catch(error => {
            console.error('Erro', error)
        })
    }
    useEffect(() => {
        buscarHistoricos()
    }, [])
    return (

        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <ScrollView>
                    <Text style={styles.titulo}>Historico do Pet</Text>
                    {historico.map((pet) => (
                        <View style={styles.containerHistorico} key={pet._id}>
                            <Text style={styles.PetHistorico}>Nome:{pet.diagnostico ? pet.diagnostico.diagnostico : 'Não informado'}</Text>
                            <Text style={styles.PetHistorico}>Registro: {pet.data_registro ? pet.data_registro : 'Não informado'}</Text>
                            <Text style={styles.PetHistorico}>Diagnóstico: {pet.diagnostico ? pet.diagnostico.descricao : 'Não informado'}</Text>
                            <Text style={styles.PetHistorico}>tratamento: {pet.diagnostico ? pet.diagnostico.tratamento : 'Não informado'}</Text>
                        </View>
                    ))}

                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
};


const styles = StyleSheet.create({
    containerHistorico: {
        width: "90%",
        backgroundColor: "#399fff",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 20
    },
    PetHistorico: {
        color: '#FFF',
        fontSize: 17,
        padding: 10
    },
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
