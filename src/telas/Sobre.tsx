import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import 'react-native-get-random-values'


export const Sobre = () => {

    return (
            <View style={styles.container}>
                <Cabecalho titulo = "Sobre"/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})