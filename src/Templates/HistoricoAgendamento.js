
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import stylesDefault from "../styles"
import DropDownPicker from 'react-native-dropdown-picker';

const HistoricoAgendamento = ({ navigation }) => {
    const [items, setItems] = useState([
        { label: 'Selecionar Pet', value: 'Selecionar Pet', disabled: true },
        { label: 'bolinha', value: 'pequeno' },
        { label: 'Romeu', value: 'medio' },
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ ...stylesDefault.container }}>
                        <StatusBar />
                        <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Home")} >
                            <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>
                        <Text style={styles.TextoCentral}>Historico de Agendamento</Text>
                        <DropDownPicker
                            placeholder='Tamanho do Pet'
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            dropDownContainerStyle={styles.DropDown}
                            style={{ ...stylesDefault.input, marginLeft: 20, borderWidth: 0 }}
                        />
                        <TouchableOpacity style={styles.containerHistorico} onPress={() => navigation.navigate("HistoricoPet")} >
                            <Text style={styles.PetHistorico}>Registro:</Text>
                            <Text style={styles.PetHistorico}>10/08/2023</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};


const styles = StyleSheet.create({
    TextoCentral: {
        fontWeight: 800,
        fontSize: 30,
        marginBottom: 10,
        marginTop: 10
    },
    DropDown: {
        backgroundColor: '#F4F3F3',
        width: '90%',
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1
    },
    PetHistorico: {
        color: '#FFF',
        fontSize: 17,
        padding: 10
    },
    buttonDefaultHist: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    containerHistorico: {
        width: "90%",
        backgroundColor: "#399fff",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    }

});

export default HistoricoAgendamento;
