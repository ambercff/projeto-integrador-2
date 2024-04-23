import { View, StyleSheet, Text } from "react-native"
import { useState,useEffect  } from "react"
import { FormLogin } from "../components/FormLogin"
import { Cabecalho } from "../components/Cabecalho"
import 'react-native-get-random-values'

export function Login() {

    //useState serve para manipular o que será exibido para o usuário
    const [listaUsuarios, setListaUsuarios] = useState([]);

    // function logarUsuario(user, senha) {
    //     const usuarioLogado = listaUsuarios.find(usuario => usuario.user === user && usuario.senha === senha)
    
    //     if (usuarioLogado) {
    //         console.log(`Login feito! ${usuarioLogado.user}`)
    //     } else {
    //         console.log("Deu errado :(")
    //     }
    // }

    return (
            <View style={styles.container}>
                {/* <Cabecalho titulo = "Login"/> */}
                <FormLogin />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})