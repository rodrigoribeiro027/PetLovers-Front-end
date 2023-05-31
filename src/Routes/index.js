import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
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
import stylesDefault from "../styles";
import PetHistoricoID from '../Templates/PetHistoricoID';


const Tab = createBottomTabNavigator();

Icon.loadFont();

function HomeTab() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

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
            <Tab.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#EE82EE',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let tamanho = 30;
                    let iconName;
                    if (route.name === 'Home') {
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
                <Tab.Screen name="Home" component={Home} />
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
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastrarProduto')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro Produto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastrarServico')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro Servico</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigateToStackScreen('CadastroFunc')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro Funcionario</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigateToStackScreen('AgendarConsulta')}>
                                <Text style={{ textAlign: 'center' }}>Cadastro 4</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
                <Stack.Screen name="Home" component={HomeTab} />
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
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
