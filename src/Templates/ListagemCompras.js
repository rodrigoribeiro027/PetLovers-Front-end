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
import formatDate from '../functions/formatDate.js';


const ListagemCompras = ({ navigation }) => {
    const [compras, setCompras] = useState([]);

    const toggleCollapse = (index) => {
        setCompras((compra) => {
            const updatedCompra = [...compra];
            updatedCompra[index].isCollapsed = !updatedCompra[index].isCollapsed;
            return updatedCompra;
        });
    };

    const comprasClientes = async () => {
        const token = await getStorageItem("token");
        axios.get("https://pet-lovers-back-end.vercel.app/compra/buscar", { headers: { Authorization: token } })
        .then(res => {
            const compraComCollapse = res.data.map((compra) => ({
                ...compra,
                isCollapsed: true,
            }));
            setCompras(compraComCollapse);
        })
        .catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema...',
            });
            console.error('Erro', error);
        });
    };

    useEffect(() => {
        comprasClientes();
    }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
            </TouchableOpacity>

            <View style={{ paddingTop: 30 }}>
                <Text style={styles.titulo}>Minhas Compras</Text>
            </View>
            <View style={styles.containerCadastro}>
                {compras.map((compra, index) => (
                    <View style={styles.ServicoConteiner} key={compra._id}>
                        <TouchableOpacity  onPress={() => toggleCollapse(index)}>
                            <Text style={styles.buttonText}>Compra realizada dia: {formatDate(compra?.data_compra,true)}</Text>
                        </TouchableOpacity>
                        
                        {!compra.isCollapsed && (
                            compra.ofertas.map((oferta,index) => (
                                <View key={oferta.id} style={{ flex: 1, marginVertical:15 }}>
                                    <Text style={styles.servicoTexto}>Item #{index+1}</Text>
                                    <View style={styles.servicoText}>
                                        <Text style={styles.servicoTexto}>{oferta.nome}</Text>
                                        <Text style={styles.servicoTexto}>R$ {oferta.preco}</Text>
                                    </View>
                                    <Text style={styles.servicoTexto}>Tipo: {oferta.tipo}</Text>
                                    <Text style={styles.servicoTexto}>Descrição: {oferta.descricao}</Text>
                                </View>
                            ))
                        )}
                    </View>
                ))}
            </View>
            <StatusBar />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ServicoConteiner: {
        width: '80%',
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#D3E5ED",
        marginBottom: 10,
    },
    servicoText: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    servicoTexto: {
        color: 'black',
    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 15,
    },
    selectInput: {
        backgroundColor: COLORS.white,
        width: '90%',
        padding: 15,
        borderColor: "#E0E0E0",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
    },
    containerCadastro: {
        paddingTop: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 15,
        padding:10
    },
});

export default ListagemCompras;
