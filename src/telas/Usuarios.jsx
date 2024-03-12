import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import { Lista } from "../components/Lista"
import { useState } from "react"
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'

export function Usuarios() {

    //useState serve para manipular o que será exibido para o usuário
    const [listaUsuarios, setListaUsuarios] = useState([]);

    function adicionarUsuario(nome, email, telefone){
        let novoUsuario = {
            codigo: uuid(),
            nome: nome,
            email: email,
            telefone: telefone
        }

        // os 3 pontos podem servir para duas situações pegar dados de um vetor ou distribuir dados em elementos individuais

        // Na linha de código abaixo estamos acrescentando o novo usuário ao listaUsuarios, utilizamos o set para setar a nova forma da lista e os colchetes para abrir e fechar o vetor

        setListaUsuarios([...listaUsuarios, novoUsuario])

        console.log(listaUsuarios)

    }

    const removerUsuario = codigo => {

        //verificando se cada usuario da lista tem um codigo diferente do codigo passado
        setListaUsuarios(listaUsuarios.filter( usuario => usuario.codigo !== codigo ))
    }

    return (
        <View style={styles.container}>
            <Cabecalho titulo = "Usuarios"/>
            <Formulario adicionar={adicionarUsuario}/>
            <Lista colecao={listaUsuarios}
            remover={removerUsuario}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})