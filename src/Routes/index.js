
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

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
                <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario}/>
                <Stack.Screen name="AgendarConsulta" component={AgendarConsulta}/>
                <Stack.Screen name="MeusPets" component={MeusPets}/>
                <Stack.Screen name='CadastrarPet' component={CadastrarPet}/>
                <Stack.Screen name='Servicos' component={Servicos}/>
                <Stack.Screen name='CadastrarServico' component={CadastrarServico}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
