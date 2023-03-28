import { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import StatusBarDefault from "../components/StatusBar";
import stylesDefault from "../styles";
import { Image, Text } from "react-native-animatable";
import { launchImageLibrary } from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { getStorageItem } from '../functions/encryptedStorageFunctions';

const CadastrarPet = ({ navigation }) => {


    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [genero, setGenero] = useState('');
    const [raca, setRaca] = useState('');
    const [tamanho, setTamanho] = useState('');

    const [Foto, SetFoto] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Tamanho do Pet', value: 'Tamanho do Pet', disabled: true },
        { label: 'Pequeno', value: 'pequeno' },
        { label: 'Médio', value: 'medio' },
        { label: 'Grande', value: 'grande' }
    ]);


    const cadastrarPet = async () => {
        const token = await getStorageItem('token');
        const dados={
            nome: nome,
            idade: idade,
            genero: genero,
            raca: raca
        }

        axios.post('https://pet-lovers-back-end.vercel.app/pet/cadastrar', dados, { headers: { Authorization: token } }).then((res)=>{
            console.log(res);
            navigation.navigate('MeusPets')
            Toast.show({
                type: 'success',
                text1: 'Cadastro Realizado com Sucesso.',
            });
        }).catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Ocorreu algum problema',
            });
            console.error('Erro', error.response)
        })
    };


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

    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback>
                    <SafeAreaView style={{ ...stylesDefault.container }}>
                        <StatusBarDefault />

                        <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("MeusPets")} >
                            <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>

                        <Text style={styles.textCadastroPet}>Cadastrar Pet</Text>
                        <Image onPress={() => uploadImage()} style={styles.imagemUploadPet} source={Foto ? { uri: Foto.uri } : require('../assets/user.png')} />

                        <TouchableOpacity style={{ ...stylesDefault.buttonDefault, marginBottom: 20 }} onPress={() => uploadImage()} >
                            <Text style={styles.uploadImageText} >Upload Foto</Text>
                        </TouchableOpacity>

                        <TextInput value={nome} onChangeText={e => setNome(e)} placeholder='Nome' style={{ ...stylesDefault.input }} />
                        <TextInput value={idade} onChangeText={e => setIdade(e)} placeholder='Idade' style={{ ...stylesDefault.input }} />
                        <TextInput value={genero} onChangeText={e => setGenero(e)} placeholder='Genero' style={{ ...stylesDefault.input }} />
                        <TextInput value={raca} onChangeText={e => setRaca(e)} placeholder='Raça' style={{ ...stylesDefault.input }} />

                        <DropDownPicker
                            placeholder='Tamanho do Pet'
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            dropDownContainerStyle={styles.dropDownContainer}
                            style={{ ...stylesDefault.input, marginLeft: 20, borderWidth: 0 }}
                        />


                        <TouchableOpacity style={{ ...stylesDefault.buttonDefault }} onPress={() => cadastrarPet()} >
                            <Text style={styles.cadastrarButonText}>Cadastrar</Text>
                        </TouchableOpacity>

                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    textCadastroPet: {
        fontWeight: 800,
        fontSize: 35,
        marginBottom: 25
    },
    imagemUploadPet: {
        height: 200,
        width: 200,
        borderColor: '#E0E0E0',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: '#E0E0E0'
    },
    cadastrarButonText: {
        color: '#FFF',
        fontSize: 17
    },
    dropDownContainer: {
        backgroundColor: '#F4F3F3',
        width: '90%',
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1
    }

})

export default CadastrarPet;
