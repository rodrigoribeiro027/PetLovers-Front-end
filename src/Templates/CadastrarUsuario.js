import React from 'react';
import {
    StyleSheet,
    Text, ScrollView,
    TextInput, 
    SafeAreaView,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform, ToastAndroid, Alert
} from 'react-native';
import { Image } from 'react-native-animatable';
import { launchImageLibrary } from 'react-native-image-picker';
import styleDefault from "../styles";
import StatusBar from '../components/StatusBar.js';


const CadastrarUsuario = ({navigation}) => {

    const [Foto, SetFoto] = React.useState('');
    const setToast = (msg) => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT,ToastAndroid.CENTER);
    }

    const uploadImage = () => {
        let options = {
            mediatype: 'photo',
            quality: 1,
            includeBase64: false,
        };
        launchImageLibrary(options, res => {
            if(res.didCancel){
                setToast('Seleção de Imagem Cancelada.')
            } else if((res.errorCode =='Permissão')){
                setToastMsg('Sem Autorização!!!')
            }else if((res.errorCode =='outros')){
                setToastMsg(res.errorMessage);
            } else if (res.assets[0].fileSize > 2097152){
                Alert.alert('Só aceitamos imagens de Tamanho 2 MB!!!', [{text: 'Ok'}])
            }else {
                SetFoto(res.assets[0]);
            }
        })
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SafeAreaView style={styles.container}>
                        <StatusBar/>

                        <TouchableOpacity style={styleDefault.buttonVoltarDefault}  onPress={()=>navigation.navigate("Login")} >
                            <Text style={styleDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>

                        <Text style={styles.TextPrincipalCadastro}>Cadastrar Usuario</Text>

                        <Image onPress={()=> uploadImage()} style={styles.imagenUploadUsuario} source={Foto ? { uri: Foto.uri } : require('../assets/user.png')}/>

                        <TouchableOpacity style={{...styles.loginButon, marginBottom:20}}  onPress={()=> uploadImage()} >
                            <Text style={styles.uploadImageText} >Upload Foto</Text>
                        </TouchableOpacity>

                        <TextInput placeholder='Email'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Senha' secureTextEntry={true}
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Rg'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Cpf'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Bairro'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='rua'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='numero'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Complemento'
                        style={styleDefault.input}>
                        </TextInput>

                        <TextInput placeholder='Telefone'
                        style={styleDefault.input}>
                        </TextInput>

                        <TouchableOpacity style={styles.loginButon} onPress={()=>navigation.navigate("Login")} >
                            <Text style={styleDefault.buttonTextDefault}>Enviar</Text>
                        </TouchableOpacity> 
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    imagenUploadUsuario:{
        height:200, 
        width:200, 
        borderColor:"#E0E0E0", 
        
        borderRadius:100,
        backgroundColor:"#E0E0E0"
    },
    uploadImageText:{
        color:"#FFF",
        fontSize:17
    },
    container:{
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        paddingBottom: 20
    },
    imgpets:{
        width:'100%',
        height:410,
    },
    loginButon:{
        width:'90%',
        marginTop:'5%',
        backgroundColor:"#399fff",
        height:42,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:5
    },
    esqueceuSenha:{
        width:'90%',
        alignItems:"flex-end"
    },
    esqueceuSenhaText:{
        color:"#399fff"
    },
    TextPrincipalCadastro:{
        fontWeight:800,
        fontSize:35,
        marginBottom:25,
        marginTop:20
    },
    criarConta:{
        width:'90%',
        alignItems:"center"
    },
    criarContaText:{
        color:"#399fff",
        fontWeight:800,
        height:75,marginTop:'3%',
    }
});

export default CadastrarUsuario;