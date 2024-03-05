import { View, StyleSheet, Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"

export function Lista() {

    const listaUsuarios = [
        {
            codigo: '1',
            nome: "João",
            email: "joao@gmail.com",
            telefone: "(19) 1234-5678"
        },
        {
            codigo: '2',
            nome: "Maria",
            email: "maria@gmail.com",
            telefone: "(19) 9876-5432"
        },
        {
            codigo: '3',
            nome: "Asdrubal",
            email: "asdrubal@gmail.com",
            telefone: "(19) 1122-3344"
        }
    ]

    return (
        <View>
            <FlatList
                data={listaUsuarios} // Fonte de dados
                keyExtractor={(item) => {item.codigo}} // Cada item da lista precisa de um índice, então, nesse trecho, estamos pegando cada codigo do item
                renderItem={({item}) => ( // 'renderItem' serve para renderizar cada atributo do objeto
                    <>
                        <Usuario 
                            nome={item.nome}
                            email={item.email}
                            telefone={item.telefone}
                        />
                    </>
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