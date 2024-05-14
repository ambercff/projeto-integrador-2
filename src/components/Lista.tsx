import { View, StyleSheet, Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"

interface UsuarioProps{
    codigo: string;
    nome: string;
    email: string;
    telefone: string;
    usuario: string;
    senha: string;
}

interface ListaProps {
    colecao: UsuarioProps[];
    remover: (codigo: string) => void;
}

export const Lista = ({colecao, remover}: ListaProps) => {

    return (
        <View>
            <FlatList
                data={colecao} // Fonte de dados
                keyExtractor={item => item.codigo} // Cada item da lista precisa de um índice, então, nesse trecho, estamos pegando cada codigo do item
                renderItem={({item}) => ( // 'renderItem' serve para renderizar cada atributo do objeto
                        <Usuario 
                            nome={item.nome}
                            email={item.email}
                            telefone={item.telefone}
                            usuario={item.usuario}
                            senha={item.senha}
                            excluir={() => remover(item.codigo)}
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