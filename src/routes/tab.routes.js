import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react'
import { Feather } from '@expo/vector-icons';

import { Cadastro } from '../screens/Cadastro';
import { Login } from '../screens/Login';
import { Senha } from '../screens/Senha';


const Tab = createBottomTabNavigator();


export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions = {{headerShown: false}} >
            <Tab.Screen
                name = "Cadastro"
                component= {Cadastro}
                
            />


        <Tab.Screen
                name = "Login"
                component= {Login}
            />


        <Tab.Screen
                name = "Senha"
                component= {Senha}
            />


        </Tab.Navigator>
    )
}
