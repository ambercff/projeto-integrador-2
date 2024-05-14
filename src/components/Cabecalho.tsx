import { StyleSheet, View, Text } from 'react-native'

interface CabecalhoProps {
    titulo: string;
}

export const Cabecalho = ({titulo}: CabecalhoProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> {titulo}</Text>
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