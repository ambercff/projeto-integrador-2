import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

export function FormularioAmbienteEquipamento({adicionar}) {

    const [descricao, setDescricao] = useState('')
    const [statusOperacional, setStatusOperacional] = useState('')
    const [instrucoesSeguranca, setInstrucoesSeguranca] = useState('')
    const [contatoResponsavel, setContatoResponsavel] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastro Ambiente Equipamento </Text>
            <View>
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Descricao"
                    onChangeText={setDescricao}
                    value={descricao}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Status Operacional"
                    onChangeText={setStatusOperacional}
                    value={statusOperacional}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Instruções Segurança"
                    onChangeText={setInstrucoesSeguranca}
                    value={instrucoesSeguranca}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Contato Responsável"
                    onChangeText={setContatoResponsavel}
                    value={contatoResponsavel}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Latitude"
                    onChangeText={setLatitude}
                    value={latitude}
                />
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Longitude"
                    onChangeText={setLongitude}
                    value={longitude}
                />
            </View>

            <View style={styles.container_botao}>
                <TouchableOpacity 
                style={styles.botao} 
                onPress={() => adicionar(descricao, statusOperacional, instrucoesSeguranca, contatoResponsavel, latitude, longitude)}> 
                    <Text style={styles.texto_botao}> Adicionar </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    campo: {
        height: 50,
        width: 350,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#000"
    },

    botao: {    
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 200,
        marginTop: 24,
        borderRadius: 12,
        borderColor: '#4f4f4f',
        borderWidth: 1
    },

    texto_botao: {
        color: "#fff"
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    }

})