import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import { Lista } from "../components/Lista"

export function Usuarios() {
    return (
        <View style={styles.container}>
            <Cabecalho titulo = "Usuarios"/>
            <Formulario />
            <Lista />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})