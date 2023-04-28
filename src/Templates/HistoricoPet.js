

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, ScrollView,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"

const HistoricoPet = ({ navigation }) => {

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ ...stylesDefault.container }}>
                        <StatusBar />
                        <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                            <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>
                        <Text style={styles.TextoCentral}>Registro 10/08/2023</Text>
                        <View style={styles.containerHistorico}>
                            <Text style={styles.PetHistorico}>Diagnostico:</Text>
                            <View style={styles.caixaTexto}>
                                <Text style={styles.TextoDescricao}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor</Text>
                            </View>
                            <Text style={styles.PetHistorico}>Diagnostico: 20/10/2000</Text>
                            <Text style={styles.PetHistorico}>Data do Tratamento:</Text>
                            <View style={styles.caixaTexto}>
                                <Text style={styles.TextoDescricao}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor</Text>
                            </View>
                            <Text style={styles.PetHistorico}>Dia Do Diagnostico: 20/10/2000</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};


const styles = StyleSheet.create({
    TextoCentral: {
        fontWeight: 700,
        fontSize: 37,
        marginTop: 15
    },
    PetHistorico: {
        color: '#FFF',
        fontSize: 17,
        padding: 2
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
        width: "96%",
        backgroundColor: "#399fff",
        padding: 4,
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 10,
    },
    caixaTexto: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: "#FFFF",
        padding: 4,
        borderRadius: 5
    },
    TextoDescricao: {
        color: 'black',
        fontSize: 18
    }

});

export default HistoricoPet;
