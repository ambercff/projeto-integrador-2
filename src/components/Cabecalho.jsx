import { StyleSheet, View, Text } from 'react-native'

export const Cabecalho = ({titulo, subtitulo}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> {titulo}</Text>
            <Text style={styles.text}> {subtitulo} </Text>
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