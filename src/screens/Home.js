import { Image, StyleSheet, Text,View } from "react-native";
import { Button } from "../components/Button";
import Logo from '../../assets/Logo.png'


export function Home({navigation}) {
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

            <Text style={styles.titulo}>O que deseja fazer?</Text>


            <Button onPress={() => navigation.navigate('Cadastrar Coral')}>
                    Cadastrar Coral
                </Button>  

            <Button onPress={() => navigation.navigate('Acompanhar Coral')}>
                    Acompanhar Coral
                </Button>


        

           
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
        fontSize: 24,
        // Espessura do texto (negrito)
        fontWeight: "600"
    }
})