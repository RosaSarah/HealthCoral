import { StyleSheet, TextInput, View } from "react-native";

export function Input({ ...props }) {
    return (
        <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        color:'black',

        height: 40,
        width: '100%',
        paddingHorizontal: 10,
        
        borderWidth: 1,
        borderColor:'#595656',
        borderStyle: 'solid',
        borderRadius: 10
    },
})