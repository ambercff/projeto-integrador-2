import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react"

export const Botao = ({texto}) => {

    let [cliques, setCliques] = useState(0) //é como se fosse um get e um set, seria uma função para ler e outra para alterar (cliques - get | setCliques - set)

    const contarCliques = () => {
        setCliques(cliques + 1)
    }


    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={contarCliques}
        >
            <Text style={styles.texto}> {texto} ({cliques})</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        marginTop: 24,
        marginStart: 24,
        borderRadius: 12,
        borderColor: '#4f4f4f',
        borderWidth: 1
    },

    texto: {
        color: '#fff',
        fontSize: 20
    }
})