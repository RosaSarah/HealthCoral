import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from '../../assets/Logo.png'
import { api } from "../services/api";
import { useState } from "react";
import dayjs from "dayjs";

export function AcompanharCoral({navigation}) {
    const [ idCoral, setIdCoral] = useState('')
    const [dadosCoral, setDadosCoral] =useState('')
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

            <Text style={styles.titulo}>Informe o coral que deseja vizualizar:</Text>

            
            <Input placeholder="Id Coral:"
            value={idCoral} onChangeText={setIdCoral} />
            
            <Button onPress={()=>{
                if(idCoral=='')return setErro('Id inválido')

                api.get('/coral/' + idCoral)
                .then(response=>setDadosCoral(response.data))
                .catch(()=>setErro ('Coral não encontrado'))

            }} >Vizualizar</Button>

            {erro ?(
                <Text>
                    {erro}
                </Text>
    
            ) : null}

            {dadosCoral ? (
                <View>
                    <Text>
                        
                        Data de inicio: {dayjs( dadosSafra.dataInicio)
                        .format('DD/MM/YYYY')} 
                    </Text>
                </View>
            ) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Espaço interno
        padding: 28,
        // Espaçamento entre itens
        gap: 27,
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