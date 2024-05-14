import { Text, View, StyleSheet } from "react-native";
import { Cabecalho } from "../components/Cabecalho";
import { Botao } from "../components/Botao";

export const Inicial = () =>{
    return(
        <View style={styles.container}>
            <Cabecalho titulo = "Localizador"/>
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