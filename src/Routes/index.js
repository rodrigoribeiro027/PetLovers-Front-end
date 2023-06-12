import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState,useEffect } from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Login from '../Templates/login';
import RecuperarSenha from '../Templates/RecuperarSenha';
import CadastrarUsuario from '../Templates/CadastrarUsuario';
import AgendarConsulta from '../Templates/AgendarConsulta';
import MeusPets from '../Templates/MeusPets';
import Home from '../Templates/home';
import CadastrarPet from '../Templates/CadastrarPet';
import Servicos from '../Templates/Servicos';
import CadastrarServico from '../Templates/CadastrarServico';
import ListagemUsuarios from '../Templates/ListagemUsuarios';
import HistoricoAgendamento from '../Templates/HistoricoAgendamento';
import HistoricoPet from '../Templates/HistoricoPet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../colors';
import PerfilUsuario from '../Templates/PerfilUsuario';
import CadastroFunc from '../Templates/CadastroFunc';
import CadastrarProduto from '../Templates/CadastrarProduto';
import { useNavigation } from '@react-navigation/native';
import PetHistoricoID from '../Templates/PetHistoricoID';
import ListagemAgendamentoFunc from '../Templates/ListagemAgendamentoFunc';
import ListagemAgendamentoCli from '../Templates/ListagemAgendamentoCli';
import ListagemCompras from '../Templates/ListagemCompras';
import { getStorageItem } from '../functions/encryptedStorageFunctions.js';


const Tab = createBottomTabNavigator();

Icon.loadFont();

function Routes() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const [acesso, setAcesso] = useState();


    const nivelDeAcessoDoUsuario = async () => {
        const acesso = await getStorageItem('acesso');
        setAcesso(acesso);
    }
    useEffect(()=>{
        nivelDeAcessoDoUsuario()
    },[])
    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const navigateToStackScreen = (rota) => {
        navigation.navigate(rota);
        closeModal();
    }

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator initialRouteName="HomeTab" screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#EE82EE',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let tamanho = 30;
                    let iconName;
                    if (route.name === 'HomeTab') {
                        iconName = 'home'
                        tamanho = 32;
                    } else if (route.name === 'historicoAgendamento') {
                        iconName = 'plus-circle'
                        tamanho = 38
                    } else if (route.name === 'PerfilUsuario') {
                        iconName = 'user'
                    }

                    return (
                        <Icon
                            name={iconName}
                            size={tamanho}
                            color={focused ? COLORS.primary : color} // Defina a cor do ícone ativo
                            onPress={() => {
                                if (iconName === 'plus-circle') {
                                    openModal();
                                } else {
                                    navigation.navigate(route.name);
                                }
                            }}
                        />
                    );
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: 'black',
            })}>
                <Tab.Screen name="HomeTab" component={Stack} initialParams={{ screen: "Home" }} />
                <Tab.Screen name="historicoAgendamento" component={HistoricoAgendamento} />
                <Tab.Screen name="PerfilUsuario" component={PerfilUsuario} />
            </Tab.Navigator>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <TouchableOpacity style={{ flex: 1 }} onPress={closeModal}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('AgendarConsulta')}>
                                <Text style={{ textAlign: 'center' }}>Agendar Consulta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastrarPet')}>
                                <Text style={{ textAlign: 'center' }}>Cadastrar Pet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('Servicos')}>
                                <Text style={{ textAlign: 'center' }}>Loja</Text>
                            </TouchableOpacity>
                        {acesso === "admin" && (
                            <>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastrarProduto')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro Produto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastrarServico')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro Servico</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastroFunc')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro Funcionario</Text>
                            </TouchableOpacity>
                            </>)}
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
            <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CadastrarPet" component={CadastrarPet} />
            <Stack.Screen name="AgendarConsulta" component={AgendarConsulta} />
            <Stack.Screen name="HistoricoAgendamento" component={HistoricoAgendamento} />
            <Stack.Screen name="HistoricoPet" component={HistoricoPet} />
            <Stack.Screen name="Usuarios" component={ListagemUsuarios} />
            <Stack.Screen name="CadastrarServico" component={CadastrarServico} />
            <Stack.Screen name="Servicos" component={Servicos} />
            <Stack.Screen name="MeusPets" component={MeusPets} />
            <Stack.Screen name="CadastroFunc" component={CadastroFunc} />
            <Stack.Screen name="CadastrarProduto" component={CadastrarProduto} />
            <Stack.Screen name="PetHistoricoID" component={PetHistoricoID} />
            <Stack.Screen name="ListagemAgendamentoFunc" component={ListagemAgendamentoFunc} />
            <Stack.Screen name="ListagemAgendamentoCli" component={ListagemAgendamentoCli} />
            <Stack.Screen name="ListagemCompras" component={ListagemCompras} />
        </Stack.Navigator>
    )
};

const BaseStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Routes" component={Routes} />
                <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default BaseStack;
