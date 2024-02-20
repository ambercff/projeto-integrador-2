import { StyleSheet, View, Text } from 'react-native'

export const Cabecalho = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Senai Roberto Mange</Text>
            <Text style={styles.text}> 2DS </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        paddingVertical: 12
    },

    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '300'
    }
})