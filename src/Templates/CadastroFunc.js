
import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text, ScrollView,
    TextInput,
    SafeAreaView,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ToastAndroid, Alert
} from 'react-native';
import { Image } from 'react-native-animatable';
import { launchImageLibrary } from 'react-native-image-picker';
import styleDefault from "../styles";
import StatusBar from '../components/StatusBar.js';
import axios from 'axios';
import Toast from 'react-native-toast-message';


const CadastroFunc = ({ navigation }) => {


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [telefone, setTelefone] = useState('');

    const [Foto, SetFoto] = useState('');

    const setToast = (msg) => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }


    const uploadImage = () => {
        let options = {
            mediatype: 'photo',
            quality: 1,
            includeBase64: false,
        };
        launchImageLibrary(options, res => {
            if (res.didCancel) {
                setToast('Seleção de Imagem Cancelada.')
            } else if ((res.errorCode == 'Permissão')) {
                setToastMsg('Sem Autorização!!!')
            } else if ((res.errorCode == 'outros')) {
                setToastMsg(res.errorMessage);
            } else if (res.assets[0].fileSize > 2097152) {
                Alert.alert('Só aceitamos imagens de Tamanho 2 MB!!!', [{ text: 'Ok' }])
            } else {
                SetFoto(res.assets[0]);
            }
        })

    }


    const sendImageToDrive = async (id, tipo) => {

        let localUri = Foto.uri;
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();
        formData.append('file', { uri: localUri, name: filename, type });
        formData.append('id', id);
        formData.append('tipo', tipo);

        axios.post('https://pet-lovers-back-end.vercel.app/upload/drive', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(res => {
            console.log('upload deu certo');
        }).catch(error => {
            console.error('Erro', error);
        })
    }

    const cadastrarUsuarioFunc = () => {

        const dados = {
            nome: nome,
            email: email,
            senha: senha,
            endereco: {
                bairro: bairro,
                rua: rua,
                numero: Number(numero),
                complemento: complemento
            },
            tipoUsuario: "funcionario",
            telefone: {
                numero: Number(telefone)
            }
        }

        axios.post('https://pet-lovers-back-end.vercel.app/usuario/cadastrar', dados).then(res => {
            const user_id = res.data._id;
            const tipo = 'usuario';
            sendImageToDrive(user_id, tipo);
            navigation.navigate("Usuarios");
            Toast.show({
                type: 'success',
                text1: 'Cadastro Realizado com Sucesso.',
            });
        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema',
            });
            console.error('Erro', error.response);
        })

    }


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SafeAreaView style={styles.container}>
                        <StatusBar />

                        <TouchableOpacity style={styleDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Login")} >
                            <Text style={styleDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>

                        <Text style={styles.TextPrincipalCadastro}>Cadastrar Funcionario</Text>

                        <Image onPress={() => uploadImage()} style={styles.imagenUploadUsuario} source={Foto ? { uri: Foto.uri } : require('../assets/user.png')} />

                        <TouchableOpacity style={{ ...styles.loginButon, marginBottom: 20 }} onPress={() => uploadImage()} >
                            <Text style={styles.uploadImageText} >Upload Foto</Text>
                        </TouchableOpacity>

                        <TextInput placeholder='Nome'
                            style={styleDefault.input}
                            value={nome}
                            onChangeText={e => setNome(e)}
                        >
                        </TextInput>

                        <TextInput
                            placeholder='Email'
                            textContentType='emailAddress'
                            style={styleDefault.input}
                            value={email}
                            onChangeText={e => setEmail(e)}
                        >
                        </TextInput>

                        <TextInput
                            placeholder='Senha'
                            secureTextEntry={true}
                            style={styleDefault.input}
                            value={senha}
                            onChangeText={e => setSenha(e)}
                        >
                        </TextInput>

                        <TextInput placeholder='Rg'
                            style={styleDefault.input}
                        >
                        </TextInput>

                        <TextInput placeholder='Cpf'
                            style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Bairro'
                            style={styleDefault.input}
                            value={bairro}
                            onChangeText={e => setBairro(e)}
                        >
                        </TextInput>

                        <TextInput placeholder='Rua'
                            style={styleDefault.input}
                            value={rua}
                            onChangeText={e => setRua(e)}
                        >
                        </TextInput>

                        <TextInput
                            placeholder='Numero'
                            style={styleDefault.input}
                            keyboardType={'numeric'}
                            value={numero}
                            onChangeText={e => setNumero(e)}
                        >
                        </TextInput>

                        <TextInput
                            placeholder='Complemento'
                            style={styleDefault.input}
                            value={complemento}
                            onChangeText={e => setComplemento(e)}
                        >
                        </TextInput>

                        <TextInput
                            placeholder='Telefone'
                            style={styleDefault.input}
                            keyboardType={'numeric'}
                            value={telefone}
                            onChangeText={e => setTelefone(e)}
                        >
                        </TextInput>

                        <TouchableOpacity style={styles.loginButon} onPress={() => cadastrarUsuarioFunc()} >
                            <Text style={styleDefault.buttonTextDefault}>Enviar</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    imagenUploadUsuario: {
        height: 200,
        width: 200,
        borderColor: "#E0E0E0",

        borderRadius: 100,
        backgroundColor: "#E0E0E0"
    },
    uploadImageText: {
        color: "#FFF",
        fontSize: 17
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20
    },
    imgpets: {
        width: '100%',
        height: 410,
    },
    loginButon: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    esqueceuSenha: {
        width: '90%',
        alignItems: "flex-end"
    },
    esqueceuSenhaText: {
        color: "#399fff"
    },
    TextPrincipalCadastro: {
        fontWeight: 800,
        fontSize: 35,
        marginBottom: 25,
        marginTop: 20
    },
    criarConta: {
        width: '90%',
        alignItems: "center"
    },
    criarContaText: {
        color: "#399fff",
        fontWeight: 800,
        height: 75, marginTop: '3%',
    }
});

export default CadastroFunc;