import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { ListaAmbienteEquipamento } from "../components/ListaAmbienteEquipamento"
import { useState } from "react"
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'
import { FormularioAmbienteEquipamento } from "../components/FormularioAmbienteEquipamento"

interface AmbienteEquipamentoProps {
    codigo: string;
    descricao: string;
    statusOperacional: string;
    instrucoesSeguranca: string;
    contatoResponsavel: string;
    latitude: string;
    longitude: string;
}

export const AmbientesEquipamentos = () => {
 
    const [ambientesEquipamentos, setAmbientesEquipamentos] = useState<AmbienteEquipamentoProps[]>([])
 
    const adicionarAmbienteEquipamento = (descricao:string,
                                          statusOperacional:string,
                                          instrucoesSeguranca:string,
                                          contatoResponsavel:string,
                                          latitude:string,
                                          longitude:string,) => {
 
        let novoAmbienteEquipamento: AmbienteEquipamentoProps = {
            codigo: String(uuid.v4()),
            descricao: descricao,
            statusOperacional: statusOperacional,
            instrucoesSeguranca: instrucoesSeguranca,
            contatoResponsavel: contatoResponsavel,
            latitude: latitude,
            longitude: longitude
        }
 
        setAmbientesEquipamentos([...ambientesEquipamentos, novoAmbienteEquipamento])
    }
 
 
    const removerAmbienteEquipamento = (codigo:string) => {
 
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