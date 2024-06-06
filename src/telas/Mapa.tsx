import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles/styleMap.jsx';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../components/AuthContext';
import axios from 'axios';

export default function Geo() {
    const navigation = useNavigation();

    const [sensorProximo, setSensorProximo] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [distance1, setDistance1] = useState(null); // Distância até o ponto fixo 1
    const [distance2, setDistance2] = useState(null); // Distância até o ponto fixo 2
    const [temp, setTemp] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [sensores, setSensores] = useState<Sensor[]>([]);
    const [fixedPoints, setFixedPoints] = useState([]);

    interface Sensor {
        id: number;
        tipo: string;
        mac_address: string | null;
        latitude: number;
        longitude: number;
        localizacao: string;
        responsavel: string;
        unidade_medida: string;
        status_operacional: boolean;
        observacao: string;
    }

    const initialRegion = {
        latitude: -22.9140639,
        longitude: -47.068686,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get<Sensor>('http://10.0.2.2:8000/api/sensores/1');
                const response2 = await axios.get<Sensor>('http://10.0.2.2:8000/api/sensores/5');
                setSensores([response1.data, response2.data]);
                setFixedPoints([
                    {
                        id: response1.data.id,
                        latitude: response1.data.latitude,
                        longitude: response1.data.longitude,
                    },
                    {
                        id: response2.data.id,
                        latitude: response2.data.latitude,
                        longitude: response2.data.longitude,
                    }
                ]);
            } catch (error) {
                console.error(error);
            }
        };
        console.log(sensores)
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
    
                const locationSubscription = await Location.watchPositionAsync(
                    {
                        accuracy: Location.Accuracy.High,
                        timeInterval: 1000,
                        distanceInterval: 1,
                    },
                    (newLocation) => {
                        setLocation(newLocation.coords);
                    }
                );
    
                return () => {
                    locationSubscription.remove();
                };
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        if (sensores.length > 0 && location) {
            const distanceToFixedPoint1 = haversine(location.latitude, location.longitude, fixedPoints[0].latitude, fixedPoints[0].longitude);
            const distanceToFixedPoint2 = haversine(location.latitude, location.longitude, fixedPoints[1].latitude, fixedPoints[1].longitude);
            setDistance1(distanceToFixedPoint1);
            setDistance2(distanceToFixedPoint2);
            if (distanceToFixedPoint1 <= distanceToFixedPoint2) {
                const sensor = fixedPoints[1];
                setSensorProximo(sensor);
            } else {
                const sensor = fixedPoints[0];
                setSensorProximo(sensor);
            }
        }
    }, [sensores, location]);

    const haversine = (lat1, lon1, lat2, lon2) => {
        const toRad = (value) => (value * Math.PI) / 180;

        const R = 6371000; // Raio da Terra em metros
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distância em metros

        return d;
    };

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
    }

    console.log(fixedPoints)

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {fixedPoints.map(point => (
                    <Marker
                        key={point.id}
                        coordinate={{ latitude: point.latitude, longitude: point.longitude }}
                        pinColor="blue" // Cor do marcador para os pontos fixos
                    />
                ))}
                {location && (
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        pinColor="red" // Cor do marcador para a localização atual
                    />
                )}
            </MapView>

            <View style={styles.cxs}>
                <View style={styles.cx}><Text style={styles.cxTxt}>Latitude: </Text><Text style={styles.cxTxt}>{location && location.latitude}</Text></View>
                <View style={styles.cx}><Text style={styles.cxTxt}>Longitude: </Text><Text style={styles.cxTxt}>{location && location.longitude}</Text></View>
                <View style={styles.cx}><Text style={styles.cxTxt}>Distância até o ponto fixo 1: </Text>{distance1 !== null && <Text style={styles.cxTxt}>{distance1.toFixed(1)} metros</Text>}</View>
                <View style={styles.cx}><Text style={styles.cxTxt}>Distância até o ponto fixo 2: </Text>{distance2 !== null && <Text style={styles.cxTxt}>{distance2.toFixed(2)} metros</Text>}</View>
                <View style={styles.cx}><Text style={styles.cxTxt}>Temperatura:</Text><Text style={styles.cxTxt}>{temp}ºC</Text></View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.modalContainer}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Detalhes Adicionais</Text>
                            <TouchableOpacity
                                style={styles.openButton}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Close Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}
