import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'

interface FormularioProps {
    adicionar: (
        nome: string,
        email: string,
        telefone: string,
        usuario: string,
        senha: string
    ) => void
}

export const Formulario = ({adicionar}: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

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
                    placeholder='Telefone'
                    placeholderTextColor="#000"
                    keyboardType='phone-pad'                
                    onChangeText={setTelefone}
                    value={telefone}
                />
                <TextInput 
                    style={styles.campo}
                    placeholder='Usuário'
                    placeholderTextColor="#000"
                    keyboardType='default'                
                    onChangeText={setUsuario}
                    value={usuario}
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

            <View>
                <TouchableOpacity 
                style={styles.botao} 
                onPress={() => adicionar(nome, email, telefone, usuario, senha)}> 
                <Text>
                    <Feather 
                        name="user-plus" 
                        size={24} 
                        color='#dee2e6' 
                    />  
                </Text>
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
        // borderRadius: 12,
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