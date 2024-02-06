import { Text, View } from "react-native"
import { styles } from "../style/inicial.js"

export function Inicial() {
    return <>
        <View style={styles.container}>
            <Text style={styles.texto}>Senai Roberto Mange</Text>
            <Text style={styles.texto}>2DS-TB</Text>
        </View>
    </>
}