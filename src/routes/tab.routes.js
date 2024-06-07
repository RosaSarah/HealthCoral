import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react'
import { Feather } from '@expo/vector-icons';

import { Cadastro } from '../screens/Cadastro';
import { Login } from '../screens/Login';
import { Senha } from '../screens/Senha';
import { Home } from '../screens/Home'
import { CadastrarCoral } from '../screens/CadastrarCoral';
import { AcompanharCoral } from '../screens/AcompanharCoral';


const Tab = createBottomTabNavigator();


export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions = {{headerShown: false}} >
        <Tab.Screen
                name = "Login"
                component= {Login}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size}/>
                }}
            />

        <Tab.Screen
                name = "Cadastro"
                component= {Cadastro}
                options={{
                    tabBarItemStyle: { display: "none" },
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size}/>
                }}
            />

        <Tab.Screen
                name = "Senha"
                component= {Senha}
                options={{
                    tabBarItemStyle: { display: "none" },
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size}/>
                }}
            />


        <Tab.Screen
                name = "Home"
                component= {Home}
                options={{
                    tabBarItemStyle: { },
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size}/>
                }}
            />   

        <Tab.Screen
                name = "Cadastrar Coral"
                component= {CadastrarCoral}
                options={{
                    tabBarItemStyle: { },
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size}/>
                }}
            />        
            
        <Tab.Screen
                name = "Acompanhar Coral"
                component= {AcompanharCoral}
                options={{
                    tabBarItemStyle: { },
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size}/>
                }}
            />   
        </Tab.Navigator>
    )
}
