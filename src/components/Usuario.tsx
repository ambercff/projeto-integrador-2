import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Feather } from '@expo/vector-icons'

interface UsuarioProps{
    nome: string;
    email: string;
    telefone: string;
    usuario: string;
    senha: string;
    excluir: () => void
}

export const Usuario = ({nome, email, telefone, usuario, senha, excluir}: UsuarioProps) => {
    return (
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text>Nome: {nome}</Text>
                <Text>E-mail: {email}</Text>
                <Text>Telefone: {telefone}</Text>
                <Text>Usuário: {usuario}</Text>
                <Text>Senha: {senha}</Text>
            </View>

            <TouchableOpacity 
            style={styles.btn}
            onPress={excluir}
            >
                <Text style={styles.text}>                     
                <Feather 
                        name="user-minus" 
                        size={24} 
                        color='#dee2e6' 
                    />   </Text>
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