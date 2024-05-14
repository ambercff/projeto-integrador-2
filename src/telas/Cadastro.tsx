import { View, StyleSheet } from "react-native"
import { useState } from "react"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import { FormLogin } from "../components/FormLogin"
import {v4 as uuid} from 'uuid'
import 'react-native-get-random-values'

export const Cadastro = () => {

    //useState serve para manipular o que será exibido para o usuário
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

        const adicionarUsuario = (
            nome:string, 
            email: string,
            telefone: string,
            usuario: string,
            senha: string) => {

            setCodigo(String(uuid.v4()))
            setNome(nome)
            setEmail(email)
            setTelefone(telefone)
            setUsuario(usuario)
            setSenha(senha)
        }

    

    return (
            <View style={styles.container}>
                <Cabecalho titulo = "Cadastro"/>
                <Formulario adicionar={adicionarUsuario}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})