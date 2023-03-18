
import React, { useState } from 'react';
import {
    Image, Button,
    StyleSheet,
    Text,
    View, StatusBar, TextInput,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, Icon,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";



const AgendarConsulta = ({navigation}) => {
const [date,setDate] =useState(new Date());
const [mode,setMode] =useState('date');
const [show,setShow] =useState(false);
const [text,setText] =useState('Data');
const [text2,setText2] =useState('Hora:');

const onChange = (event,selectedDate) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate)
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Marcado: ' + tempDate.getHours()+ ' Horas e ' + tempDate.getMinutes() + ' Minutos: ' ;
    setText(fDate)
    setText2(fTime)
    console.log(fDate + ' (' + fTime + ')')
}

const showMode = (currentMode)=>{
setShow(true)
setMode(currentMode);
}

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Animatable.View style={styles.container}>
                        <StatusBar backgroundColor="#FFF" traslucent={false}></StatusBar>
                        <TouchableOpacity style={styles.VoltarButon}  onPress={()=>navigation.navigate("Home")} >
                            <Text style={styles.loginButonText}>Voltar</Text>
                        </TouchableOpacity>
                        <Animatable.Text animation='fadeInRight' style={styles.TextPrincipalAgendamento}>Criar Agendamento</Animatable.Text>
                        
                        <View style={styles.espacoagendamento}></View>

                        <TextInput placeholder='Nome Completo'
                            style={styles.input}>
                        </TextInput>
                        <TextInput placeholder='Nome Do Pet'
                            style={styles.input}>
                        </TextInput>
                        <TextInput placeholder='Tamanho do Pet'
                            style={styles.input}>
                        </TextInput>
                        <TextInput placeholder='Idade do Pet'
                            style={styles.input}>
                        </TextInput>
                        <TextInput placeholder='Foto do Pet'
                            style={styles.input}>
                        </TextInput>
                        <TextInput placeholder='tipo de Consulta'
                            style={styles.input}>
                        </TextInput>
                        <View style={styles.DataButon}>
                            <Button title='Data da Consulta' onPress={()=>showMode('date')} />
                            <Text   style={styles.TextDataHora}>{text}</Text>
                            <Button title='Horario' onPress={()=>showMode('time')} />
                            <Text   style={styles.TextDataHora}>{text2}</Text>
                        </View>
                        {show &&(
                            <DateTimePicker testID='dateTimePicker' value={date} mode={mode}
                            is24Hour={true} display='default' onChange={onChange} 
                            />
                        )}
                        <TouchableOpacity style={styles.AgendamentoButon} >
                            <Text style={styles.AgendamentoButonText}  onPress={()=>navigation.navigate("Home")}>Agendar</Text>
                        </TouchableOpacity>
                        
                    </Animatable.View>
                    
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};
const styles = StyleSheet.create({
    containerStart:{
        width:"100%",
    },
    AgendamentoButon:{
        width:'90%',
        marginTop:'2%',
        backgroundColor:"#399fff",
        height:42,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:5
    },
    AgendamentoButonText:{
        color:"#FFF",
        fontSize:17,
        fontWeight:'bold'

    },
    TextDataHora:{
        color: "black",
        fontSize: 20,
        
    },
    espacoagendamento: {
        width: '90%',
        marginTop: 20
    },
    DataButon: {
        width: '90%',
        
    },
    DataButonText: {
        color: "#FFF",
        fontSize: 17
    },
    TextPrincipalAgendamento: {
        fontfamily: 'Inter',
        fontWeight: 800,
        fontSize: 30,
        border: '3px solid #000000',
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    }, menuUsuario: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    menuUsuarioText: {
        color: "#FFF",
        fontSize: 17
    },
    input: {
        backgroundColor: "#F4F3F3",
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    VoltarButon:{
        width:'100%',
        backgroundColor:"#399fff",
        height:50,
        justifyContent:'center',
        alignItems:"center",
    },
});

export default AgendarConsulta;