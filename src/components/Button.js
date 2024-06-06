import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ children, ...props }) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // Alinha os itens ao centro verticalmente e horizontalmente
        alignItems: "center",
        justifyContent: "center",

        // Cor de fundo
        backgroundColor: "#0091bc",
        // Altura
        height: 40,
        // Largura
        width: "100%",

        // Borda
        borderWidth: 1,
        borderColor: "#595656",
        borderStyle: "solid",

        // Borda arredondada
        borderRadius: 10
    },
    text: {
        // Cor do texto
        color: "white",
        // Gramatura do texto (negrito)
        fontWeight: "600"
    }
})