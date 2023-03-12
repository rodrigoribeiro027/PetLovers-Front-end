
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,StatusBar,TextInput,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,Icon
} from 'react-native';

const RecuperarSenha = ({navigation}) => {
    return (
        <>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" traslucent={false}></StatusBar>
                <Text style={styles.TextPrincipal}>Recuperar Senha</Text>
                <Image source={require("../assets/recuperar.png")} style={styles.imgpets}/>
                <Text style={styles.espacamento}>Para Recuperar sua senha,Digite seu Email no campo abaixo e enviaremos no seu Email.</Text> 
                <TextInput placeholder='Digite Seu Email'
                style={styles.input}>
                </TextInput>
                <TouchableOpacity style={styles.loginButon} onPress={()=>navigation.navigate("Login")} >
                    <Text style={styles.loginButonText}>Enviar</Text>
                </TouchableOpacity>
                <View style={styles.espaco}></View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};

const styles = StyleSheet.create({
    espaco:{
        width:'90%',
        marginTop:70
    },
    container:{
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        
    },
    input:{
        backgroundColor:"#F4F3F3",
        width:'90%',
        height:50,
        marginBottom:20,
        padding:8,
        borderRadius:5,
        
        borderColor:"#E0E0E0",
    },
    loginButon:{
        width:'90%',
        backgroundColor:"#399fff",
        height:50,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:5
    },
    loginButonText:{
        color:"#FFF",
        fontSize:17
    },
    TextPrincipal:{
        fontfamily: 'Inter',
        fontWeight:800,
        fontSize:45,
        border: '3px solid #000000',
    },imgpets:{
        width:'100%',
        height:410,
    },
    espacamento:{
        width:'90%',
        marginTop:'10%', 
        paddingBottom:'10%',
        fontSize:20
    }
});

export default RecuperarSenha;
