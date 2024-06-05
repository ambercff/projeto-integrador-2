import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useAuth } from "./AuthContext"

export const FormLogin = () => {

    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const { setToken } = useAuth();

    const navigation = useNavigation()

    const fazerLogin = async () => {
        
        try {
            const response = await axios.post(
                'http://10.0.2.2:8000/api/token/',
                {
                    username: user,
                    password: senha
                },
                
            );
            const token = response.data.access;
            console.log('Login bem-sucedido:', token);
            setToken(token); // Atualiza o token no contexto
            navigation.navigate('rotasTab');
        } catch (error) {
            console.error('Erro de login:', error);
        }
    };

    // function abrirInicial() {
    //     navigation.navigate('rotasTab')
    // }

    function abrirCadastro(){
        navigation.navigate('cadastro')
    }

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

            <View>
                <TouchableOpacity 
                style={styles.botao} 
                onPress={fazerLogin}> 
                    <Text style={styles.texto_botao}> Login </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.text_cadastro}> Não tem uma conta? <Text onPress={abrirCadastro}>Cadastre-se </Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        flex:1 
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
    },

    text_cadastro: {
        marginTop: 20
    }

})