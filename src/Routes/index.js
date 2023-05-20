
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
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



const Tab = createBottomTabNavigator();


Icon.loadFont();//Esse aqui
function HomeTab() {
    
    return (

        <Tab.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
            headerShown: false, tabBarActiveTintColor: '#EE82EE', tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
                let tamanho = 30;
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home'
                    tamanho = 32;
                }
                else if (route.name === 'historicoAgendamento') {
                    iconName = 'plus-circle'
                    tamanho = 38
                }
                else if (route.name === 'PerfilUsuario') {
                    iconName = 'user'
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={tamanho} color={color} />;
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: 'black',
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="historicoAgendamento" component={HistoricoAgendamento} />
            {/* <Tab.Screen name="MeusPets" component={MeusPets} /> */}
            <Tab.Screen name="PerfilUsuario" component={PerfilUsuario} />


        </Tab.Navigator>

    );
}

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
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
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
