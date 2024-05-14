import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Lista } from "../components/Lista"
import { useState } from "react"
import uuid from 'react-native-uuid'

interface UsuarioProps{
    codigo: string;
    nome: string;
    email: string;
    telefone: string;
    usuario: string;
    senha: string;
}

export const Usuarios = () => {

    //useState serve para manipular o que será exibido para o usuário
    const [usuarios, setUsuarios] = useState<UsuarioProps[]>([]);

    const adicionarUsuario = (nome:string, email:string, telefone:string, usuario:string, senha:string,) => {

        let novoUsuario = {
            codigo: String(uuid.v4()),
            nome: nome,
            email: email,
            telefone: telefone,
            usuario: usuario,
            senha: senha
        } 

        setUsuarios([...usuarios, novoUsuario])
    }
    const removerUsuario = (codigo: string) => {

        setUsuarios( usuarios.filter(
            usuario => usuario.codigo !== codigo
        ) )
    }

    return (
            <View style={styles.container}>
                <Cabecalho titulo = "Usuarios"/>
                <Lista colecao={usuarios}
                remover={removerUsuario}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})