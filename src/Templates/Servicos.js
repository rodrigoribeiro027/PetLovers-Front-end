
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,  Image, ImageBackground
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'
import stylesDefault from '../styles.js';

const CriarServico = ({ navigation }) => {
    return (
        <>
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
                                    <TouchableOpacity onPress={() => navigation.navigate('CadastrarServico')} >
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
                                    <TouchableOpacity onPress={() => navigation.navigate('CadastrarProduto')} >
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

                <View style={styles.ServicoConteiner}>
                    <View style={styles.servicoText}>
                        <Text style={styles.servicoTexto}>Banho e Tosa</Text>
                        <Text style={styles.servicoTexto}>R$80</Text>
                    </View>
                    <Text style={styles.servicoTexto}>Descrição:
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos.
                    </Text>
                </View>

            </View>
        </>
    )
};
const styles = StyleSheet.create({
    ServicoConteiner: {
        borderWidth: 1.2,
        borderRadius: 5,
        padding: 5,
        fontSize: 10,
        backgroundColor: "#D3E5ED",
        marginBottom: 10,

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
        marginBottom:25
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
