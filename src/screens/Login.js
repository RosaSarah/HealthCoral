import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import * as yup from 'yup'
import Logo from '../../assets/Logo.png'
import { useState } from "react";
import {api} from "../services/api"

export function Login({ navigation }) {
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')
    const [erro, setErro] = useState ('')

    const loginSchema = yup.object({
        email: yup.string().email("Você deve digitar um e-mail válido!").required("E-mail é um campo obrigatório!"),
        senha: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres!").required("Senha é um campo obrigatório!")
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

            <Input placeholder="E-mail"
            value={email} onChangeText={setEmail} />

            <Input placeholder="Senha"
            value={senha} onChangeText={setSenha} />

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text>Ainda não tem uma conta? Crie agora</Text>
            </TouchableOpacity>
            
            <Button onPress={() => {
               

                loginSchema.validate({email, senha})

                .then(()=>{
                    api.post('/autenticacao/login' , {email, senha})
                    .then(()=>navigation.navigate('Home'))
                    .catch(()=>setErro ('Email ou senha inváido'))
                })

                .catch(error => setErro(error.errors[0]))

                
            
              }}>Entrar</Button>

            

        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Ocupa o espaço todo da
        flex: 1,
        // Espaço interno
        padding: 24,
        justifyContent: "center",
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