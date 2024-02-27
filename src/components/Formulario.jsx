import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

export function Formulario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function adicionarUsuario(){
        let novoUsuario = {
            nome: nome,
            email: email,
            telefone: telefone
        }

        console.log(novoUsuario)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastro </Text>
            <View>
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Nome"
                    onChangeText={setNome}
                    value={nome}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="email-address"
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="phone-pad"
                    placeholder="Telefone"
                    onChangeText={setTelefone}
                    value={telefone}
                />
            </View>

            <View style={styles.container_botao}>
                <TouchableOpacity style={styles.botao} onPress={adicionarUsuario}> 
                    <Text style={styles.texto_botao}> Adicionar </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    campo: {
        height: 50,
        width: 350,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#000"
    },

    botao: {    
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 200,
        marginTop: 24,
        borderRadius: 12,
        borderColor: '#4f4f4f',
        borderWidth: 1
    },

    texto_botao: {
        color: "#fff"
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    }

})