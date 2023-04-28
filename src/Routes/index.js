
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();


Icon.loadFont();//Esse aqui
function HomeTab() {
    return (
        <Tab.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
            headerShown: false, tabBarActiveTintColor: '#EE82EE', tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home'
                }
                else if(route.name === 'historicoAgendamento'){
                    iconName = 'plus-circle'
                }
                else if(route.name === 'MeusPets'){
                    iconName = 'github-alt'
                }
                
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'black',
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="historicoAgendamento" component={HistoricoAgendamento} />
            <Tab.Screen name="MeusPets" component={MeusPets} />
        </Tab.Navigator>
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
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
