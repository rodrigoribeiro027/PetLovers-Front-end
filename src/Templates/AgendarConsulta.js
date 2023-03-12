
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,StatusBar,TextInput,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,Icon,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

const AgendarConsulta = ({navigation}) => {
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Animatable.View  style={styles.container}>
                <StatusBar backgroundColor="#FFF" traslucent={false}></StatusBar>
                <Animatable.Text animation='fadeInRight'  style={styles.TextPrincipal}>LovePets</Animatable.Text>
                <Animatable.View animation='fadeInUp' style={styles.div}>
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
    }
});

export default AgendarConsulta;
