import { View, StyleSheet, Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"

export function Lista({colecao, remover}) {

    return (
        <View>
            <FlatList
                data={colecao} // Fonte de dados
                keyExtractor={item => item.codigo} // Cada item da lista precisa de um índice, então, nesse trecho, estamos pegando cada codigo do item
                renderItem={({item}) => ( // 'renderItem' serve para renderizar cada atributo do objeto
                        <Usuario 
                            nome={item.nome}
                            user={item.user}
                            senha={item.senha}
                            remover={() => remover(item.codigo)}
                        />
                )}
                ListEmptyComponent={() => (
                    <Text> Nenhum Usuário Cadastrado </Text>
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