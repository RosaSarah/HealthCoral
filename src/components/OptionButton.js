import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function OptionButton({ title, children, ...props }) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // Alinha os itens ao centro verticalmente e horizontalmente
        justifyContent: "center",

        // Cor de fundo
        backgroundColor: "#6CB40C",
        // Altura
        height: 60,
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
        color: "black",
        // Gramatura do texto (negrito)
        fontWeight: "600"
    },
    title: {
        
    fontWeight: "600"
    }
})