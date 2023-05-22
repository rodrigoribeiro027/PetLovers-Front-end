
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"

const CadastrarServico = ({ navigation }) => {

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ ...stylesDefault.container }}>
                        <StatusBar />
                        <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Servicos")} >
                            <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>
                        <Text style={styles.textPrincipal}>Cadastrar Servico</Text>
                        <TextInput placeholder='Nome' style={{ ...stylesDefault.input, marginTop: 2 }} />
                        <TextInput
                            placeholder='Descrição do serviço'
                            multiline={true}
                            maxLength={300}
                            numberOfLines={5}
                            style={{
                                ...stylesDefault.input,
                                height: 150,
                                paddingTop: 8,
                                textAlignVertical: 'top'
                            }}
                        />
                        <TextInput placeholder='Preço' style={{ ...stylesDefault.input }} />
                        <TouchableOpacity style={{ ...stylesDefault.input, backgroundColor: "#399fff", alignItems: "center", marginTop: 40 }} onPress={() => navigation.navigate("Servicos")} >
                            <Text style={stylesDefault.buttonTextDefault}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};

const styles = StyleSheet.create({
    textPrincipal: {
        fontWeight: 800,
        fontSize: 35,
        marginBottom: 25,
        marginTop: 40
    },
    DropDownServiço: {
        backgroundColor: '#F4F3F3',
        width: '90%',
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1
    },

});

export default CadastrarServico;
