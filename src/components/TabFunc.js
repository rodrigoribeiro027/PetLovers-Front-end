import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Image
} from 'react-native';
const tabsFuc = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.HomeContainer}>
                <View style={styles.options1}>
                    <Image source={require("../assets/listaUser.png")} style={styles.agendar} />
                    <View>
                        <Text style={styles.TextoConsulta}>Listagem de Perfils de Usuarios</Text>
                        <TouchableOpacity style={styles.agendarConsulta} onPress={() => navigation.navigate('Usuarios')} >
                            <Text style={styles.TextoConsultaUsuario} >Usuarios</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.HomeContainer}>
                <View style={styles.options1}>
                    <Image source={require("../assets/CadastroFunc.png")} style={styles.agendar} />
                    <View>
                        <Text style={styles.TextoConsulta}>Cadastramento de Funcionarios</Text>
                        <TouchableOpacity style={styles.agendarConsulta} onPress={() => navigation.navigate('CadastroFunc')} >
                            <Text style={styles.TextoConsultaFuncionario} >Cadastro Funcionario</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        
    },
    text2: {
        color: "black",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        
    },
    meusPets: {
        width: '70%',
        height: 100,
    },
    TextoConsulta: {
        width: '60%',
        fontSize: 15,

    },TextoConsultaUsuario:{
        textAlign:'center',
        width: '100%',
        fontSize: 15,
        height: 30,
    },
    TextoConsultaFuncionario:{
        width: '80%',
        fontSize: 15,
        height: 40,
    },
    agendarConsulta: {
        justifyContent: 'center',
        alignItems: "center",
        marginTop: '20%',
        width: '50%',
        backgroundColor: "#BA68C8",
        borderRadius: 100,
    },
    agendar: {
        width: '70%',
        height: 140,

    },
    texto: {
        color: 'red',
    },
    HomeContainer: {
        width: '90%',
        borderRadius: 5,
        fontSize: 10,
        backgroundColor: "#D3E5ED",
        height: 150,
        marginTop: 10
    },
    options: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        fontSize: 10,
        height: 110,
        width: '90%',
        justifyContent: 'space-between'
    },
    options1: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 10,
        height: 110,
        padding: 10,
        width: '90%',

    },
    optionBtn: {
        backgroundColor: "#D3E5ED",
        borderRadius: 5,
        width: '45%',
        justifyContent: 'center',
        alignItems: "center",
    },
    VoltarButon: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    containerStart: {
        width: "100%",
    },
    espaco: {
        width: '90%',
        marginTop: 170
    },
    divButton: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    menuUsuario: {
        width: '90%',
        marginTop: '5%',
        marginBottom: 5,
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
    TextPrincipaltextobv: {
        fontFamily: "Inter",
        fontWeight: 800,
        fontSize: 30,
        marginTop: 10,
    },

})
export default tabsFuc;