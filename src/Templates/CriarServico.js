
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'

const CriarServico = ({ navigation }) => {
    return (
        <>
            <View style={styles.containerCadastro}>
                <StatusBar />
                <TouchableOpacity style={styles.VoltarButon} onPress={() => navigation.navigate("Home")} >
                    <Text style={styles.loginButonText}>Voltar</Text>
                </TouchableOpacity>
                <Animatable.Text animation='fadeInRight' style={styles.TextPrincipaltextoCadastro}>Cadastrar Serviço</Animatable.Text>
                <Animatable.View animation='fadeInRight' style={styles.divButton}>
                    <TouchableOpacity style={styles.menuUsuario} onPress={() => navigation.navigate("AgendarConsulta")}>
                        <Text style={styles.menuUsuarioText} >Cadastrar Serviço</Text>
                    </TouchableOpacity>
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
    ServicoConteiner:{
        borderWidth:2,
        borderRadius:5,
        padding: 5,
        fontSize:10,
        backgroundColor:"#D3E5ED",
        marginBottom:10,
        
    },
    servicoText: {
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    servicoTexto:{
        color:'black'
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
    },
    TextPrincipaltextoCadastro: {
        fontfamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
        border: '3px solid #000000',
    },
    containerCadastro: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
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
        fontfamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
        border: '3px solid #000000',
    },


});

export default CriarServico;
