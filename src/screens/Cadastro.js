import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import Logo from '../../assets/Logo.png'
import { useState } from "react";
import * as yup from 'yup'
import {api} from "../services/api"

export function Cadastro ({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [cnpj, setCnpj] = useState ('')
    const [cep, setCep] = useState ('')
    const [telefone, setTelefone] =useState ('')
    const [email, setEmail] =useState ('')
    const [erro, setErro] = useState('')
    
    const cadastroSchema = yup.object({
        nomeCompleto: yup.string().required('Nome é um campo obrigatório'),
        cnpj: yup.number().min(14,"Digite o CNPJ completo").required('CNPJ é um campo obrigatório'),
        cep: yup.number().min(8,"Digite o CEP completo").required('CEP é um campo obrigatório'),
        telefone: yup.number().min(11,"Digite o telefone completo").required('Telefone é um campo obrigatório'),
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
            <Text style={styles.titulo}>Bem-Vindo!</Text>

            )}

            

            <Input placeholder="Nome completo:" 
            value={nomeCompleto} onChangeText={setNomeCompleto}/>

            <Input placeholder="CNPJ:" 
            value={cnpj} onChangeText={setCnpj}/>

            <Input placeholder="CEP:" 
            value={cep} onChangeText={setCep}/>

            <Input placeholder="Telefone:" 
            value={telefone} onChangeText={setTelefone}/>

            <Input placeholder="E-mail:" 
            value={email} onChangeText={setEmail}/>

        <Button onPress={() =>{

            cadastroSchema.validate({nomeCompleto, cnpj, cep, telefone, email})
            
            .then(()=>{
                api.post('/autenticacao/login', {nomeCompleto, cnpj,cep, telefone, email})
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
    }
})