import { Text, View, StyleSheet } from "react-native";
import { Cabecalho } from "../components/Cabecalho.jsx";
import { Botao } from "../components/Botao.jsx";

export function Inicial() {
    return(
        <View style={styles.container}>
            <Cabecalho titulo = "Senai Roberto Mange" subtitulo= "2DS"/>
            <Botao texto="Usuario"/>
            <Botao texto="Sensores"/>
            <Botao texto="Sobre"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    texto:{
        color: '#000',
        fontSize: 24
    }
});