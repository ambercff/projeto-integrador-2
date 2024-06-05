import { View, StyleSheet, Text, Image } from "react-native"
import { useState,useEffect  } from "react"
import { FormLogin } from "../components/FormLogin"
import { Cabecalho } from "../components/Cabecalho"
import 'react-native-get-random-values'
import {useNavigation} from '@react-navigation/native'

export const Login = () => {


    const navigation = useNavigation()

    function abrirInicial(){
        navigation.navigate('rotasTab')
    }

    return (
            <View style={styles.container}>
                {/* <Cabecalho titulo = "Login"/> */}
                <Image
                    style={styles.logo}
                    source={require('../../assets/icon.png')}
                />
                <FormLogin />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo:{
        height:105,
        width:170,
        marginBottom:50,
        marginTop:-155
    },

})