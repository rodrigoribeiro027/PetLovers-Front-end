import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, Image, ScrollView,
} from 'react-native';
import stylesDefault from "../styles"



const HistoricoPet = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>Fazer Diagnóstico</Text>
                        <View style={styles.historicoContainer}>
                            <Text style={styles.historicoItem}>Diagnóstico:</Text>
                            <TextInput
                                    placeholder='Diagnóstico'
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
                            <Text style={styles.historicoItem}>Tratamento:</Text>
                            <TextInput
                                    placeholder='Tratamento'
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
                            <TouchableOpacity style={styles.AgendamentoButon} >
                                <Text style={styles.AgendamentoButonText} onPress={() => navigation.navigate("Home")}>Agendar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    AgendamentoButon: {
        width: '100%',
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
    titulo: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 10
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historicoContainer: {
        backgroundColor: '#399fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    historicoItem: {
        color: '#FFF',
        fontSize: 17,
        marginBottom: 5,
    },
    caixaTexto: {
        backgroundColor: '#FFFF',
        padding: 10,
        borderRadius: 5,
    },
    textoDescricao: {
        fontSize: 18,
    },
    button: {
        backgroundColor: '#399fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    collapsibleContent: {
        backgroundColor: '#EEE',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
});

export default HistoricoPet;
