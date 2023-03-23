
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform,
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'

const CadastrarServico = ({navigation}) => {
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
            <View style={styles.container}>
                <StatusBar/>
                <TouchableOpacity style={styles.VoltarButon}  onPress={()=>navigation.navigate("Login")} >
                    <Text style={styles.loginButonText}>Logout</Text>
                </TouchableOpacity>
                
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};
const styles = StyleSheet.create({

});

export default CadastrarServico;
