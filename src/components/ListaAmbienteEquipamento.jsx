import { View, StyleSheet, Text, FlatList } from "react-native"
import { AmbienteEquipamento } from "./AmbienteEquipamento"

export function ListaAmbienteEquipamento({colecao, remover}) {

    return (
        <View>
            <FlatList
                data={colecao} // Fonte de dados
                keyExtractor={item => item.codigo} // Cada item da lista precisa de um índice, então, nesse trecho, estamos pegando cada codigo do item
                renderItem={({item}) => ( // 'renderItem' serve para renderizar cada atributo do objeto
                        <AmbienteEquipamento 
                            descricao={item.descricao}
                            statusOperacional={item.statusOperacional}
                            instrucoesSeguranca={item.instrucoesSeguranca}
                            contatoResponsavel={item.contatoResponsavel}
                            latitude={item.latitude}
                            longitude={item.longitude}
                            remover={() => remover(item.codigo)}
                        />
                )}
                ListEmptyComponent={() => (
                    <Text> Nenhum Ambiente/Equipamento Cadastrado </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    texto: {
        color: '#000'
    }

})