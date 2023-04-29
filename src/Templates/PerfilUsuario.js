

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, ScrollView, Image
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"
import Icon from 'react-native-vector-icons/FontAwesome';

const PerfilUsuario = ({ navigation }) => {

    return (
        <>
            <ScrollView style={styles.screen}>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.containerPerfil}>
                            <StatusBar />
                            <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                                <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                            </TouchableOpacity>
                            <View style={styles.PerfilContainer}>
                                <View style={styles.linha}>
                                    <Image style={styles.imagenUser} source={require('../assets/user.png')} />
                                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                    <Icon name="cog" style={stylesDefault.voltar} size={45} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.TextoCentral}>Informações Pessoais</Text>
                            <View style={styles.PerfilContainer2}>
                                <View style={styles.linha2}>
                                    <Text>Nome:</Text>
                                    <Text>Rodrigo Ribeiro Dos Santos</Text>
                                    <Text>Email:</Text>
                                    <Text>Rodrigo@gmail.com</Text>
                                    <Text>Rg:</Text>
                                    <Text>444.333.222-9</Text>
                                    <Text>Cpf:</Text>
                                    <Text>444.333.222-9</Text>
                                    <Text>Telefone:</Text>
                                    <Text>123944-8877</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                        <Icon name="pencil" style={stylesDefault.voltar} size={25} color="black" /> 
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.TextoCentral}>Endereço</Text>
                            <View style={styles.PerfilContainer2}>
                                <View style={styles.linha2}>
                                    <Text>Nome:</Text>
                                    <Text>Rodrigo Ribeiro Dos Santos</Text>
                                    <Text>Email:</Text>
                                    <Text>Rodrigo@gmail.com</Text>
                                    <Text>Rg:</Text>
                                    <Text>444.333.222-9</Text>
                                    <Text>Cpf:</Text>
                                    <Text>444.333.222-9</Text>
                                    <Text>Telefone:</Text>
                                    <Text>123944-8877</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                        <Icon name="pencil" style={stylesDefault.voltar} size={25} color="black" /> 
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View >
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>

        </>
    )
};


const styles = StyleSheet.create({
    PerfilContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 5,
        fontSize: 10,
        marginTop: 10,
        backgroundColor:'#D3E5ED',
        marginBottom:10,
        padding:5
    },
    linha2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding:10,
        fontSize:5
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
        marginTop: 15
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
    }

});

export default PerfilUsuario;
