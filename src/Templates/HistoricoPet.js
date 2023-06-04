import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HistoricoPet = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registro 10/08/2023</Text>
            <View style={styles.historicoContainer}>
                <Text style={styles.historicoItem}>Diagnóstico:</Text>
                <View style={styles.caixaTexto}>
                    <Text style={styles.textoDescricao}>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
                    </Text>
                </View>
                <Text style={styles.historicoItem}>Diagnóstico: 20/10/2000</Text>
                <Text style={styles.historicoItem}>Data do Tratamento:</Text>
                <View style={styles.caixaTexto}>
                    <Text style={styles.textoDescricao}>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
                    </Text>
                </View>
                <Text style={styles.historicoItem}>Dia Do Diagnóstico: 20/10/2000</Text>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
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
