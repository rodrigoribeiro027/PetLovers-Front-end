
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import StatusBar from '../components/StatusBar.js';
import * as Animatable from 'react-native-animatable'


const MeusPets = ({ navigation }) => {
    return (
        <>
            <StatusBar/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.VoltarButon} onPress={() => navigation.navigate("Home")} >
                    <Text style={styles.loginButonText}>Voltar</Text>
                </TouchableOpacity>
                <Animatable.Text animation='fadeInRight' style={styles.TextPrincipal}>Meus Pets</Animatable.Text>
                <TouchableOpacity style={{...styles.VoltarButon, ...styles.novoPets}} onPress={() => navigation.navigate("Home")} >
                    <Text style={styles.loginButonText}>Cadastrar Novo Pet</Text>
                </TouchableOpacity>
                <View style={styles.meusPets}>
                    <View style={styles.viewPetImage}>
                        <Animatable.Image animation='fadeInUp' source={require("../assets/pets.png")} style={styles.meusImgPets} />
                    </View>
                    <View style={styles.containerCard}>
                        <Text style={styles.textoPet}>Nome:</Text>
                        <Text style={styles.textoPet}>bolinha de pelo</Text>
                        <Text style={styles.textoPet}>Idade:</Text>
                        <Text style={styles.textoPet}>5 anos</Text>
                        <Text style={styles.textoPet}>Tamanho do Pet:</Text>
                        <Text style={styles.textoPet}>Porte Pequeno</Text>
                    </View>
                </View>
                <View style={styles.meusPets}>
                    <View style={styles.viewPetImage}>
                        <Animatable.Image animation='fadeInUp' source={require("../assets/pets.png")} style={styles.meusImgPets} />
                    </View>
                    <View style={styles.containerCard}>
                        <Text style={styles.textoPet}>Nome:</Text>
                        <Text style={styles.textoPet}>bolinha de pelo</Text>
                        <Text style={styles.textoPet}>Idade:</Text>
                        <Text style={styles.textoPet}>5 anos</Text>
                        <Text style={styles.textoPet}>Tamanho do Pet:</Text>
                        <Text style={styles.textoPet}>Porte Pequeno</Text>
                    </View>
                </View>
                <View style={styles.meusPets}>
                    <View style={styles.viewPetImage}>
                        <Animatable.Image animation='fadeInUp' source={require("../assets/pets.png")} style={styles.meusImgPets} />
                    </View>
                    <View style={styles.containerCard}>
                        <Text style={styles.textoPet}>Nome:</Text>
                        <Text style={styles.textoPet}>bolinha de pelo</Text>
                        <Text style={styles.textoPet}>Idade:</Text>
                        <Text style={styles.textoPet}>5 anos</Text>
                        <Text style={styles.textoPet}>Tamanho do Pet:</Text>
                        <Text style={styles.textoPet}>Porte Pequeno</Text>
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    novoPets:{
        width: '90%',
        borderRadius: 10,
        marginVertical: 20
    },
    viewPetImage: {
        flex: 0.5,
        height: '100%'
    },
    meusPets: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
        alignItems: 'center',
        height: 150,
        marginBottom: 30
    },
    textoPet: {
        fontfamily: 'Inter',
        fontWeight: 800,
        fontSize: 16,
    },
    containerCard: {
        width: '100%',
        backgroundColor: "#fff",
        flex: 0.5,
        alignItems: 'flex-start'
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
    },
    espaco: {
        width: '90%',
        marginTop: 70
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        height: '100%'
    },
    input: {
        display: 'flex',
        backgroundColor: "#F4F3F3",
        width: '90%',
        height: 50,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    loginButonText: {
        color: "#FFF",
        fontSize: 17
    },
    TextPrincipal: {
        fontfamily: 'Inter',
        fontWeight: 800,
        fontSize: 45,
        marginTop: 20
    },
    meusImgPets: {
        width: '100%',
        height: '100%'
    },
    espacamento: {
        width: '90%',
        marginTop: '10%',
        paddingBottom: '10%',
        fontSize: 20
    }
});

export default MeusPets;
