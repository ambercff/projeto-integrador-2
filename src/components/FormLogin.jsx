import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

export function FormLogin({logar}) {

    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Login </Text>
            <View>
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Usuário"
                    onChangeText={setUser}
                    value={user}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="visible-password"
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={senha}
                />
            </View>

            <View style={styles.container_botao}>
                <TouchableOpacity 
                style={styles.botao} 
                onPress={() => logar(user, senha)}> 
                    <Text style={styles.texto_botao}> Login </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text_cadastro}> Não tem uma conta? Cadastre-se </Text>
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
    },

    text_cadastro: {
        marginTop: 20
    }

})