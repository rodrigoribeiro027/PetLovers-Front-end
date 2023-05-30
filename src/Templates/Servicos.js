
import { useEffect, useState,useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Image, ImageBackground,ScrollView
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'
import stylesDefault from '../styles.js';
import axios from 'axios';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';
import {useFocusEffect  } from '@react-navigation/native';

const CriarServico = ({ navigation }) => {

    const [ofertas, setOferta] = useState([])
    const [tipo, setTipo] = useState('')


    const buscarOfertas = async () => {
        let url = 'https://pet-lovers-back-end.vercel.app/oferta/buscar';
        if(tipo == 'Servicos'){
            url = 'https://pet-lovers-back-end.vercel.app/oferta/buscarServicos';
        }
        if(tipo == 'Produtos'){
            url = 'https://pet-lovers-back-end.vercel.app/oferta/buscarProdutos';
        }
        const token = await getStorageItem('token');
        axios.get(url, { headers: { Authorization: token } }).then((res) => {
            setOferta(res.data);
        }).catch(error => {
            console.error('Erro', error.response);
        })
    }

    useEffect(() => {
        buscarOfertas();
    }, [tipo]); // Atualiza a lista de ofertas quando o valor de 'tipo' é alterado

    useFocusEffect(
        useCallback(() => {
            buscarOfertas(); // Atualiza a lista de ofertas quando a tela está em foco
        }, [])
    );

    return (
        <>
            <ScrollView style={styles.screen}>

            <View style={styles.containerCadastro}>
                <StatusBar />
                <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                    <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                </TouchableOpacity>
                <Animatable.Text animation='fadeInRight' style={styles.TextPrincipaltextoCadastro}>Serviços</Animatable.Text>
                <Animatable.View animation='fadeInRight' style={styles.divButton}>
                    <View style={styles.options}>
                        <View style={styles.optionBtn}>
                            <View>
                                <TouchableOpacity onPress={() => setTipo('Servicos')} >
                                    <View style={styles.container}>
                                        <ImageBackground source={require("../assets/servico.png")} style={{ width: 150, height: 115 }} >
                                            <Text style={styles.text}>Serviços</Text>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.optionBtn}>
                            <View>
                                <TouchableOpacity onPress={() => setTipo('Produtos')} >
                                    <View style={styles.container}>
                                        <ImageBackground source={require("../assets/Product.png")} style={{ width: 150, height: 121 }} >
                                            <Text style={styles.text}>Produtos</Text>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animatable.View>
                {ofertas.map((oferta) => (
                            <View style={styles.ServicoConteiner} key={oferta._id}>
                                <View style={styles.servicoText} >
                                    <Text style={styles.servicoTexto}>{oferta.nome}</Text>
                                    <Text style={styles.servicoTexto}>R$ {oferta.preco}</Text>
                                </View>
                                <Text style={styles.servicoTexto}>
                                    Descrição: {oferta.descricao}</Text>
                            </View>
                        ))}
            </View>
            </ScrollView>

        </>
    )
};
const styles = StyleSheet.create({
    ServicoConteiner: {
        width:'80%',
        borderRadius: 5,
        padding: 5,
        fontSize: 10,
        backgroundColor: "#D3E5ED",
        marginBottom: 10,
        padding:10

    },
    servicoText: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    servicoTexto: {
        color: 'black'
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    divButton: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25
    },
    TextPrincipaltextoCadastro: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
    },
    containerCadastro: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    }, options: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        fontSize: 10,
        height: 110,
        width: '90%',
        justifyContent: 'space-between'
    },
    TextoConsulta: {
        fontSize: 15,

    },
    options1: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 10,
        height: 110,
        padding: 10,
        width: '90%',

    },
    optionBtn: {
        backgroundColor: "#D3E5ED",
        borderRadius: 5,
        width: '45%',
        justifyContent: 'center',
        alignItems: "center",
    },
    menuUsuario: {
        width: '90%',
        marginTop: '5%',
        marginBottom: '5%',
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
    TextPrincipaltextobv: {
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
        border: '3px solid #000000',
    },


});

export default CriarServico;
