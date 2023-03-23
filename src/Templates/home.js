
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'

const Home = ({navigation}) => {
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
            <View style={styles.container}>
                <StatusBar/>
                <TouchableOpacity style={styles.VoltarButon}  onPress={()=>navigation.navigate("Login")} >
                    <Text style={styles.loginButonText}>Logout</Text>
                </TouchableOpacity>
                <Animatable.Text animation='fadeInRight'  style={styles.TextPrincipaltextobv}>Seja Bem-Vindo(a)</Animatable.Text>
                <Animatable.Image  animation='fadeInUp' source={require("../assets/Welcome.png")} style={styles.imgpets}/>
                <Animatable.View animation='fadeInRight' style={styles.divButton}>
                    <TouchableOpacity style={styles.menuUsuario} onPress={()=>navigation.navigate("AgendarConsulta")}>
                            <Text style={styles.menuUsuarioText} >Agendar Consulta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuUsuario} onPress={()=>navigation.navigate("MeusPets")}>
                            <Text style={styles.menuUsuarioText} >Meus Pets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuUsuario} onPress={()=>navigation.navigate("CriarServico")}>
                            <Text style={styles.menuUsuarioText} >Cadastrar Serviço</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuUsuario} onPress={()=>navigation.navigate("Home")}>
                            <Text style={styles.menuUsuarioText} >Historico de Agendamentos</Text>
                    </TouchableOpacity>
                    
                </Animatable.View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};
const styles = StyleSheet.create({
    VoltarButon:{
        width:'100%',
        backgroundColor:"#399fff",
        height:50,
        justifyContent:'center',
        alignItems:"center",
    },
    containerStart:{
        width:"100%",
    },
    espaco:{
        width:'90%',
        marginTop:170
    },
    divButton:{
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
    },
    imgpets:{
        width:'100%',
        height:410,
    },
    menuUsuario:{
        width:'90%',
        marginTop:'5%',
        backgroundColor:"#399fff",
        height:42,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:5
    },
    menuUsuarioText:{
        color:"#FFF",
        fontSize:17
    },
    TextPrincipaltextobv:{
        fontFamily: "Inter",
        fontWeight:800,
        fontSize:30,
    },
    container:{
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        
    }

});

export default Home;
