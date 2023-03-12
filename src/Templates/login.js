
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,StatusBar,TextInput,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,Icon,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

const Login = ({navigation}) => {
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animatable.View  style={styles.container}>
                <StatusBar backgroundColor="#FFF" traslucent={false}></StatusBar>
                <Animatable.Text animation='fadeInRight'  style={styles.TextPrincipal}>LovePets</Animatable.Text>
                <Animatable.Image  animation='fadeInUp' source={require("../assets/pets.png")} style={styles.imgpets}/>
                <Animatable.View animation='fadeInUp' style={styles.div}>
                    <TextInput placeholder='Email'
                    style={styles.input}>
                    </TextInput>

                    <TextInput placeholder='Sua Senha' secureTextEntry={true}
                    style={styles.input}>
                    </TextInput>
                    <View style={styles.esqueceuSenha}>
                        <TouchableOpacity onPress={()=>navigation.navigate("RecuperarSenha")}>
                            <Text style={styles.esqueceuSenhaText}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginButon} >
                        <Text style={styles.loginButonText}  onPress={()=>navigation.navigate("Home")}>Acessar</Text>
                    </TouchableOpacity>
                    <View style={styles.criarConta}>
                        <TouchableOpacity onPress={()=>navigation.navigate("CadastrarUsuario")}>
                            <Text style={styles.criarContaText}>Cadastre sua Conta</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Animatable.View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};
const styles = StyleSheet.create({
    div:{
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
    },
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
    TextPrincipal:{
        fontfamily: 'Inter',
        fontWeight:800,
        fontSize:64,
        border: '3px solid #000000',
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

export default Login;
