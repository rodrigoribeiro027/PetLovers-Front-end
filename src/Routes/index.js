
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react'
import Login from '../templates/Login';
import RecuperarSenha from '../templates/RecuperarSenha';
import CadastrarUsuario from '../templates/CadastrarUsuario';
import AgendarConsulta from '../templates/AgendarConsulta';
import MeusPets from '../templates/MeusPets';
import Home from '../templates/Home';



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
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
