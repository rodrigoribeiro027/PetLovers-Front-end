
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react'
import Login from '../Templates/login';
import Home from '../Templates/home';
import RecuperarSenha from '../Templates/RecuperarSenha';
import CadastrarUsuario from '../Templates/CadastrarUsuario';


const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
                    <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
};

export default Routes;
