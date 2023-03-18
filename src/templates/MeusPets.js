
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,StatusBar,TextInput,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,Icon,Button
} from 'react-native';

import * as Animatable from 'react-native-animatable'


const MeusPets = ({navigation}) => {
    return (
        <>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <TouchableOpacity style={styles.VoltarButon}  onPress={()=>navigation.navigate("Home")} >
                    <Text style={styles.loginButonText}>Voltar</Text>
            </TouchableOpacity>
            <Animatable.Text animation='fadeInRight'  style={styles.TextPrincipal}>Meus Pets</Animatable.Text>
                <View style={styles.containerCard}>
                    <Text  style={styles.textoPet}>Nome:</Text>
                    <Text  style={styles.textoPet}>bolinha de pelo</Text>
                    <Text  style={styles.textoPet}>Idade:</Text>
                    <Text  style={styles.textoPet}>5 anos</Text>
                    <Text  style={styles.textoPet}>Tamanho do Pet:</Text>
                    <Text  style={styles.textoPet}>Porte Pequeno</Text>
                    <Animatable.Image  animation='fadeInUp' source={require("../assets/pets.png")} style={styles.Meusimgpets}/>
                </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};

const styles = StyleSheet.create({
    textoPet:{
        fontfamily: 'Inter',
        fontWeight:800,
        fontSize:25,
        
    },
    containerCard:{
        width:'100%',
        backgroundColor:"#fff",
        border: '3px solid #black',
        alignItems:'flex-start'
    },
    VoltarButon:{
        width:'100%',
        backgroundColor:"#399fff",
        height:50,
    },
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
    VoltarButon:{
        width:'100%',
        backgroundColor:"#399fff",
        height:50,
        justifyContent:'center',
        alignItems:"center",
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
    },
    Meusimgpets:{
        width:'100%',
        height:350,
        alignItems:'center'
    },
    espacamento:{
        width:'90%',
        marginTop:'10%', 
        paddingBottom:'10%',
        fontSize:20
    }
});

export default MeusPets;
