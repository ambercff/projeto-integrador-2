import React, {useEffect, useState} from "react";
import axios from 'axios';
// import estilos from './css/Sensor.module.css';

export function Sensor(){
    const[sensores, setSensores] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        async function fetchSensores(){
            try{
                const token = localStorage.getItem('access_tpken')
                const response = await axios.get('http://127.0.0.1:8000/api/sensores',{
                    header:{
                        'Authorization': `Bearer ${token}`
                    }

                });
                setSensores(response.data);
                setLoading(false);
            }catch (err){
                setError(err);
                setLoading(false)
            }
        }
        fetchSensores();
}, []);

if(loading){
    return <div>Carregando</div>
}

if(error){
    return <div>
            Erro ao carregar os dados:{error.message}
    </div>
}

return(
    <div>
        <h1>Sensores </h1>
        <table>
            <tr>
                <td>ID</td>
                <td>Tipo</td>
                <td>Localização</td>
                <td>Responsável</td>
                <td>Longitude</td>
                <td>Latitude</td>
                <td>Alterar dados</td>
            </tr>
                {sensores.map(sensor =>(
                    <tr key={sensor.id}>
                        <td>{sensor.id}</td>
                        <td>{sensor.tipo}</td>
                        <td>{sensor.localizacao}</td>
                        <td>{sensor.responsavel}</td>
                        <td>{sensor.longitude}</td>
                        <td>{sensor.latitude}</td>
                        <td>Alterar</td>
                    </tr>
                ))}
        </table>
    </div>
);

}