import { View, TextInput, TouchableOpacity, StyleSheet, TextInputComponent, Switch, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
export const FormPonto: React.FC = () => {

    const[tipo, setTipo] = useState('');
    const[mac_address, setMac_address] = useState('');
    const[latitude, setLatitude] = useState('');
    const[longitude, setLongitude] = useState('');
    const[localizacao, setLocalizacao] = useState('');
    const[responsavel, setResponsavel] = useState('');
    const[unidade_medida, setUnidade_medida] = useState('');
    const[status_operacional, setStatus_operacional] = useState(false);
    const[observacao, setObservacao] = useState('');

    const navigation = useNavigation();



    const cadPonto = async () =>{
        try{
            const response = await axios.post(
                'http://10.0.2.2:8000/api/sensores/',
                {
                    tipo: tipo,
                    mac_address: mac_address,
                    latitude: latitude,
                    longitude: longitude,
                    localizacao: localizacao,
                    unidade_medida: unidade_medida,
                    status_operacional: status_operacional,
                    observacao: observacao,
                    responsavel: responsavel

                }
            )
            navigation.navigate('rotasTab');
        }
        catch(error){
            console.error('Erro de cadastro:', error);
        }
    };


    return (
        <View style={styles.container}>
            <View>
            <Picker
                selectedValue={tipo}
                style={styles.campo}
                onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
            >
                <Picker.Item label="Selecione o tipo de sensor"/>
                <Picker.Item label="Temperatura" value="Temperatura" />
                <Picker.Item label="Contador" value="Contador" />
                <Picker.Item label="Luminosidade" value="Luminosidade" />
                <Picker.Item label="Umidade" value="Umidade" />
            </Picker>

                <TextInput
                    style={styles.campo}
                    placeholder="mac_address"
                    placeholderTextColor="#01233c"
                    onChangeText={setMac_address}
                    value={mac_address}
                />

                <TextInput
                    style={styles.campo}
                    placeholder="latitude"
                    placeholderTextColor="#01233c"
                    onChangeText={setLatitude}
                    value={latitude}
                />
                
                <TextInput
                    style={styles.campo}
                    placeholder="longitude"
                    placeholderTextColor="#01233c"
                    onChangeText={setLongitude}
                    value={longitude}
                />
                    <TextInput
                    style={styles.campo}
                    placeholder="localizacao"
                    placeholderTextColor="#01233c"
                    onChangeText={setLocalizacao}
                    value={localizacao}
                />
                    <TextInput
                    style={styles.campo}
                    placeholder="Responsavel"
                    placeholderTextColor="#01233c"
                    onChangeText={setResponsavel}
                    value={responsavel}
                />
                    <TextInput
                    style={styles.campo}
                    placeholder="unidade_medida"
                    placeholderTextColor="#01233c"
                    onChangeText={setUnidade_medida}
                    value={unidade_medida}
                />

                    <View style={styles.switch_box}>
                    <Text >Status Operacional - {status_operacional ? "Ligado" : "Desligado"}</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={status_operacional ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setStatus_operacional}
                    value={status_operacional}
                    />
                    </View>
                    
            
                  <TextInput
                    style={styles.campo}
                    placeholder="observacao"
                    placeholderTextColor="#01233c"
                    onChangeText={setObservacao}
                    value={observacao}
                />
                
            </View>
            <TouchableOpacity style={styles.botao} onPress={cadPonto}>
                <Feather name="user-plus" size={24} color="#dee2e6" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    switch_box:{
        alignItems: 'flex-start',
    },

    campo: {
        height: 50,
        width: 350,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        // borderRadius: 12,
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