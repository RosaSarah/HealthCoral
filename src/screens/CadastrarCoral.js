import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from '../../assets/Logo.png'
import { api } from "../services/api";
import { useState } from "react";
import dayjs from "dayjs";


export function CadastrarCoral({navigation}) {
    const [ nome, setnome] = useState('')
    const [zonaAmbiental, setZonaAmbiental] =useState('')
    const [descricao, setDescricao] =useState('')
    const [camera, setCamera] =useState('')
    const [dadosCoral, setDadosCoral] =useState('')
    const [idCoral, setIdCoral] =useState('')
    const [erro, setErro] =useState('')
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

            <Text style={styles.titulo}>Cadastro de Coral </Text>

            <Input placeholder="Id:"
            value={idCoral} onChangeText={setIdCoral} />

            <Input placeholder="Nome:"
            value={nome} onChangeText={setnome} />

            <Input placeholder="Zona Ambiental:"
            value={zonaAmbiental} onChangeText={setZonaAmbiental} />
            
            <Input placeholder="Descrição:"
            value={descricao} onChangeText={setDescricao} />
            
            <Input placeholder="Camera:"
            value={camera} onChangeText={setCamera} />
            
            <Button onPress={()=>{
                if(idCoral=='')return setErro('Id inválido')

                api.get('/coral/' + idCoral)
                .then(response=>{
                setErro(undefined)
                setDadosCoral(response.data)})
                .catch(()=>setErro ('Coral não encontrada'))

            }} >Enviar</Button>

            {erro ?(
                <Text>
                    {erro}
                </Text>
    
            ) : null}

            {dadosCoral ? (
                <View>
                    <Text>
                        Nome = {dadosCoral.nome}
                        
                    </Text>
                </View>
            ) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Espaço interno
        padding: 24,
        // Espaçamento entre itens
        gap: 24,
        flex: 1,

        // Alinhar ao centro
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titulo: {
        // Tamanho do texto
        fontSize: 18,
        // Espessura do texto (negrito)
        fontWeight: "600"
    }
})