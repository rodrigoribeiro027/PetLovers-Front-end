import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,StatusBar,TextInput,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,Icon,
} from 'react-native';

const CadastrarUsuario = ({navigation}) => {
    return (
        <>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" traslucent={false}></StatusBar>
                <Text style={styles.TextPrincipalCadastro}>Cadastrar Usuario</Text>
                <TextInput placeholder='Email'
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='Sua Senha' secureTextEntry={true}
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='Rg'
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='Cpf'
                style={styles.input}>
                </TextInput>
                
                <TextInput placeholder='Bairro'
                style={styles.input}>
                </TextInput>
                
                <TextInput placeholder='rua'
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='numero'
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='Complemento'
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='Telefone'
                style={styles.input}>
                </TextInput>

                <TextInput placeholder='Selecionar foto'
                style={styles.input}>
                </TextInput>

                <TouchableOpacity style={styles.loginButon} onPress={()=>navigation.navigate("Login")} >
                    <Text style={styles.loginButonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        
    },imgpets:{
        width:'100%',
        height:410,
    },
    input:{
        backgroundColor:"#F4F3F3",
        width:'90%',
        height:42,
        marginBottom:20,
        padding:8,
        borderRadius:5,
        
        borderColor:"#E0E0E0",
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
    loginButonText:{
        color:"#FFF",
        fontSize:17
    },
    esqueceuSenha:{
        width:'90%',
        alignItems:"flex-end"
    },
    esqueceuSenhaText:{
        color:"#399fff"
    },
    TextPrincipalCadastro:{
        fontfamily: 'Inter',
        fontWeight:800,
        fontSize:35,
        border: '3px solid #000000',
        marginBottom:25
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
