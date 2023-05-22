
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"
import { useState } from 'react';
import axios from 'axios';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';
import { Toast } from 'react-native-toast-message/lib/src/Toast.js';

const CadastrarProduto = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    const realizarCadastro = async () => {
        const token = await getStorageItem('token');
        const produto = {
            nome,
            descricao,
            preco,
            tipo:'produto'
        }

        axios.post('https://pet-lovers-back-end.vercel.app/oferta/cadastrar', produto, { headers: { Authorization: token } }).then(res => {
            Toast.show({
                type: 'success',
                text1: 'Cadastro Realizado com Sucesso.',
            });
            navigation.navigate("Servicos");
        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema',
            });
            console.error(error)
        })
    }

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ ...stylesDefault.container }}>
                        <StatusBar />
                        <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Servicos")} >
                            <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>
                        <Text style={styles.textPrincipal}>Cadastrar Produto</Text>
                        <TextInput placeholder='Nome' style={{ ...stylesDefault.input, marginTop: 2 }} value={nome} onChangeText={(e)=> setNome(e)}  />
                        <TextInput
                            placeholder='Descrição do Produto'
                            multiline={true}
                            maxLength={300}
                            numberOfLines={5}
                            style={{
                                ...stylesDefault.input,
                                height: 150,
                                paddingTop: 8,
                                textAlignVertical: 'top'
                            }}
                            value={descricao}
                            onChangeText={(e) => setDescricao(e)}
                        />
                        <TextInput keyboardType={'numeric'} placeholder={'Preço'}  style={{ ...stylesDefault.input }} value={preco} onChangeText={(e) => setPreco(e)} />
                        <TouchableOpacity style={{ ...stylesDefault.input, backgroundColor: "#399fff", alignItems: "center", marginTop: 40 }} onPress={() => realizarCadastro()} >
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

export default CadastrarProduto;
