import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Lista } from "../components/Lista"
import { useState } from "react"
import 'react-native-get-random-values'


export function Usuarios() {

    //useState serve para manipular o que será exibido para o usuário
    const [listaUsuarios, setListaUsuarios] = useState([]);

    const removerUsuario = codigo => {

        //verificando se cada usuario da lista tem um codigo diferente do codigo passado
        setListaUsuarios(listaUsuarios.filter( usuario => usuario.codigo !== codigo ))
    }

    return (
            <View style={styles.container}>
                <Cabecalho titulo = "Usuarios"/>
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