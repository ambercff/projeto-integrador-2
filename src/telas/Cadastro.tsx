import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import 'react-native-get-random-values'

export const Cadastro = () => {
    

    return (
            <View style={styles.container}>
                <Cabecalho titulo = "Cadastro"/>
                <Formulario />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})