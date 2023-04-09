
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TextInput
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'
import stylesDefault from "../styles"
import DropDownPicker from 'react-native-dropdown-picker';

const CadastrarServico = ({ navigation }) => {
    const [items, setItems] = useState([
        { label: 'Selecionar Tipo', value: 'Selecionar Tipo', disabled: true },
        { label: 'Produto', value: 'Produto' },
        { label: 'Serviço', value: 'Serviço' },
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ ...stylesDefault.container }}>
                        <StatusBar />
                        <TouchableOpacity style={stylesDefault.buttonVoltarDefault} onPress={() => navigation.navigate("Servicos")} >
                            <Text style={stylesDefault.buttonTextDefault}>Voltar</Text>
                        </TouchableOpacity>
                        <Text style={styles.textPrincipal}>Cadastrar Serviços</Text>
                        <TextInput placeholder='Nome' style={{ ...stylesDefault.input, marginTop: 2 }} />
                        <TextInput placeholder='Preço' style={{ ...stylesDefault.input }} />
                        <TextInput
                            placeholder='Descrição do serviço'
                            multiline={true}
                            maxLength={300}
                            numberOfLines={5}
                            style={{
                                ...stylesDefault.input,
                                height: 150,
                                paddingTop: 8,
                                textAlignVertical: 'top'
                            }}
                        />
                        <DropDownPicker
                            placeholder='Selecionar Tipo'
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            dropDownContainerStyle={styles.DropDownServiço}
                            style={{ ...stylesDefault.input, marginLeft: 20, borderWidth: 0 }}
                        />
                        <TouchableOpacity style={{ ...stylesDefault.input, backgroundColor: "#399fff", alignItems: "center", marginTop: 40 }} onPress={() => navigation.navigate("Servicos")} >
                            <Text style={stylesDefault.buttonTextDefault}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
};


const styles = StyleSheet.create({
    textPrincipal: {
        fontWeight: 800,
        fontSize: 35,
        marginBottom: 25,
        marginTop: 40
    },
    DropDownServiço: {
        backgroundColor: '#F4F3F3',
        width: '90%',
        padding: 8,
        borderRadius: 5,
        marginLeft: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1
    },

});

export default CadastrarServico;
