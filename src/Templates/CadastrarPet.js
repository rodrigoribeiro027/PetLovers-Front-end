import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import StatusBarDefault from "../components/StatusBar";
import stylesDefault from "../styles";
import { Image, Text } from "react-native-animatable";
import { launchImageLibrary } from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const CadastrarPet = ({ navigation }) => {


    const [Foto, SetFoto] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Tamanho do Pet', value: 'Tamanho do Pet', disabled: true },
        { label: 'Pequeno', value: 'pequeno' },
        { label: 'Médio', value: 'medio' },
        { label: 'Grande', value: 'grande' }
    ]);


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

                        <Text style={styles.textCadastroPet}>Cadastrar Pet</Text>

                        <Image style={styles.imagemUploadPet} source={Foto} />

                        <TouchableOpacity style={{ ...stylesDefault.buttonDefault, marginBottom: 20 }} onPress={() => uploadImage()} >
                            <Text style={styles.uploadImageText} >Upload Foto</Text>
                        </TouchableOpacity>

                        <TextInput placeholder='Nome' style={{ ...stylesDefault.input }} />
                        <TextInput placeholder='Idade' style={{ ...stylesDefault.input }} />
                        <TextInput placeholder='Genero' style={{ ...stylesDefault.input }} />
                        <TextInput placeholder='Raça' style={{ ...stylesDefault.input }} />

                        <DropDownPicker
                            placeholder='Tamanho do Pet'
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            dropDownContainerStyle={styles.dropDownContainer}
                            style={{...stylesDefault.input, marginLeft: 20, borderWidth: 0}}
                        />


                        <TouchableOpacity style={{ ...stylesDefault.buttonDefault }} onPress={() => navigation.navigate('MeusPets')} >
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
    dropDownContainer:{
        backgroundColor:'#F4F3F3',
        width:'90%',
        padding:8,
        borderRadius:5,
        marginLeft: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1
    }

})

export default CadastrarPet;
