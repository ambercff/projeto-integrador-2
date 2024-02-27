import { View, StyleSheet, Text } from "react-native"

export function Lista() {
    return (
        <View>
            <Text style={styles.texto}> Lista </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    texto: {
        color: '#000'
    }

})