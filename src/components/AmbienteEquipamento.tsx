import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Feather } from '@expo/vector-icons'

interface AmbienteEquipamentoProps {
    descricao: string;
    statusOperacional: string;
    instrucoesSeguranca: string;
    contatoResponsavel: string;
    latitude: string;
    longitude: string;
    excluir: () => void;
}

export const AmbienteEquipamento = ({ descricao, statusOperacional, instrucoesSeguranca, contatoResponsavel, latitude, longitude, remover }) => {
    return (
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text> {descricao} </Text>
                <Text> {statusOperacional} </Text>
                <Text> {instrucoesSeguranca} </Text>
                <Text> {contatoResponsavel} </Text>
                <Text> {latitude} </Text>
                <Text> {longitude} </Text>
            </View>

            <TouchableOpacity
                style={styles.btn}
                onPress={remover}
            >
                <Text style={styles.text}>                     
                <Feather
                    name="user-minus"
                    size={24}
                    color='#dee2e6'
                />     </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },

    containerDados: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        borderRadius: 5
    },

    btn: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: 60,
        marginStart: 10,
        borderRadius: 5

    },

    text: {
        color: '#fff'
    }

})