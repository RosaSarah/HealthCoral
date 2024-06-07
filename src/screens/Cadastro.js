import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from '../../assets/Logo.png'
import { useState } from "react";
import * as yup from 'yup'
import {api} from "../services/api"

export function Cadastro ({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] =useState ('')
    const [erro, setErro] = useState('')
    
    const cadastroSchema = yup.object({
        nomeCompleto: yup.string().required('Nome é um campo obrigatório'),
        email: yup.string().required('Email é um campo obrigatório')

    });

    return (
        <View style={styles.login}>
            <Image
                // Local da imagem
                source={Logo}
                // Definindo a largura e altura da imagem
                style={{ width: 150, height: 150 }}
                // Pra nao cortar a imagem
                resizeMode="contain"
            />
             {erro ?(
                <View> 
                    <Text>{erro}</Text>
                    <Text style={styles.erro}>Tente novamente</Text>
                </View>    
            ) : (
            <Text style={styles.titulo}>Cadastro</Text>

            )}

            

            <Input placeholder="Nome completo:" 
            value={nomeCompleto} onChangeText={setNomeCompleto}/>

            <Input placeholder="E-mail:" 
            value={email} onChangeText={setEmail}/>

        <Button onPress={() =>{

            cadastroSchema.validate({nomeCompleto, email})
            
            .then(()=>{
                api.post('/autenticacao/login', {nomeCompleto, email})
                .then(()=> navigation.navigate('Senha'))
                .catch(() =>setErro('Um dos campos não foi preenchido corretamente')) 
            })

            .catch(error => setErro(error.errors[0]))

            
            }}>Enviar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        // Espaço interno
        padding: 24,
        // Espaçamento entre itens
        gap: 24,

        // Alinhar ao centro
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titulo: {
        // Tamanho do texto
        fontSize: 24,
        // Espessura do texto (negrito)
        fontWeight: "600"
    },
    erro: {
        color: "red",
    fontWeight: "600",
    fontSize: 15,  
    textAlign :"center"
    }    
})