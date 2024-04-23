import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { ListaAmbienteEquipamento } from "../components/ListaAmbienteEquipamento"
import { useState } from "react"
import 'react-native-get-random-values'
import { FormularioAmbienteEquipamento } from "../components/FormularioAmbienteEquipamento"


export const AmbientesEquipamentos = () => {
 
    const [ambientesEquipamentos, setAmbientesEquipamentos] = useState([])
 
    const adicionarAmbienteEquipamento = (descricao,
                                          statusOperacional,
                                          instrucoesSeguranca,
                                          contatoResponsavel,
                                          latitude,
                                          longitude) => {
 
        let novoAmbienteEquipamento = {
            codigo: uuid.v4(),
            descricao: descricao,
            statusOperacional: statusOperacional,
            instrucoesSeguranca: instrucoesSeguranca,
            contatoResponsavel: contatoResponsavel,
            latitude: latitude,
            longitude: longitude
        }
 
        setAmbientesEquipamentos([...ambientesEquipamentos, novoAmbienteEquipamento])
    }
 
 
    const removerAmbienteEquipamento = (codigo) => {
 
        setAmbientesEquipamentos( ambientesEquipamentos.filter(
            ambienteEquipamento => ambienteEquipamento.codigo !== codigo
        ) )
    }
 
    return(
        <View style={styles.container}>
 
            <Cabecalho
                titulo="Cadastro de ambientes ou equipamentos"
            />
 
            <FormularioAmbienteEquipamento
                adicionar={adicionarAmbienteEquipamento}
            />  
 
            <ListaAmbienteEquipamento
                colecao={ambientesEquipamentos}
                remover={removerAmbienteEquipamento}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})