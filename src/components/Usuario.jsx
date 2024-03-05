import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

export function Usuario({nome, email, telefone}) {
    return (
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text> {nome} </Text>
                <Text> {email} </Text>
                <Text> {telefone} </Text>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}> - </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },

    containerDados: {
        flex:1,
        backgroundColor: '#e0e0e0',
        borderRadius: 5
    },

    btn: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: 60,
        marginStart: 10,
        borderRadius: 5

    },

    text: {
        color: '#fff'
    }

})