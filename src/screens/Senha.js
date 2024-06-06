import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from '../../assets/Logo.png'
import { useState } from "react";
import * as yup from 'yup'
import {api} from "../services/api"

export function Senha({ navigation }) {
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] =useState('')
    const [erro, setErro] = useState('')
    const senhaSchema = yup.object({
        senha: yup.string().required('Senha é um campo obrigatório'),
        confirmarSenha: yup.string().min(8,"A senha deve conter no mínimo 8 dígitos").required('Confirmar sua senha é um campo obrigatório')
    });

    return (
        <View style={styles.login}>
            <Image
                // Local da imagem
                source={Logo}
                // Definindo a largura e altura da imagem
                style={{ width: 129, height: 129 }}
                // Pra nao cortar a imagem
                resizeMode="contain"
            />
             {erro ?(
                <View> 
                    <Text>{erro}</Text>
                    <Text style={styles.erro}>Tente novamente</Text>
                </View>    
            ) : (
            <Text style={styles.titulo}>Bem-Vindo!</Text>

            )}

        
            <Input placeholder="Senha" 
            value={senha} onChangeText={setSenha}/>

            <Input placeholder="Confirme sua senha" 
            value={confirmarSenha} onChangeText = {setConfirmarSenha}/>

            <View style={styles.instrucoes}> 
                <Text>Crie sua senha, deve conter:</Text>
                <Text>*No mínimo 8 digitos;</Text>
                <Text>*Uma letra maiuscula;</Text>
                <Text>*Uma letra minuscula;"</Text>
            </View>

            <Button onPress={() =>{
            
            senhaSchema.validate({senha, confirmarSenha})
            
            .then(()=>{
                api.post('/autenticacao/login',{senha,confirmarSenha})
                .then(()=>navigation.navigate('Home'))
                .catch(() =>setErro('Um dos campos não foi preenchido corretamente')) 
            })

            .catch(error => setErro(error.errors[0]))

         }}>Enviar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Espaço interno
        padding: 24,
        // Espaçamento entre itens
        gap: 24,

        // Alinhar ao centro
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titulo: {
        // Tamanho do texto
        fontSize: 24,
        // Espessura do texto (negrito)
        fontWeight: "600"
    },
    instrucoes:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor:'#595656',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 15,
        gap: 3,


    }
})