import { View, StyleSheet } from "react-native"
import { useState } from "react"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import { FormLogin } from "../components/FormLogin"
import {v4 as uuid} from 'uuid'
import 'react-native-get-random-values'

export function Cadastro() {

    //useState serve para manipular o que será exibido para o usuário
    const [listaUsuarios, setListaUsuarios] = useState([]);


    function adicionarUsuario(nome, user, senha){
        let novoUsuario = {
            codigo: uuid(),
            nome: nome,
            user: user,
            senha: senha
        }

        // os 3 pontos podem servir para duas situações pegar dados de um vetor ou distribuir dados em elementos individuais

        // Na linha de código abaixo estamos acrescentando o novo usuário ao listaUsuarios, utilizamos o set para setar a nova forma da lista e os colchetes para abrir e fechar o vetor

        setListaUsuarios([...listaUsuarios, novoUsuario])

        console.log(listaUsuarios)

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