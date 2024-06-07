import React, { useState } from 'react';
import axios from 'axios';
import styles from './css/Filtro.module.css';
import { XCircle } from '@phosphor-icons/react'

export function Filtro() {
    const [filters, setFilters] = useState({
        responsavel: '',
        status_operacional: false,
        tipo: '',
        localizacao: '',
    });

    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    let text = "";

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFilters({
            ...filters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSubmitted(true);

        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.post('http://127.0.0.1:8000/api/sensor_filter/', filters, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setSensores(response.data);
        } catch (error) {
            console.error('Error fetching sensores:', error);
            setError(error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div>
            <div  className={styles.containerForm}>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <label>Responsável</label>
                    <input type="text" name="responsavel" value={filters.responsavel} onChange={handleChange} />

                    <label>Status Operacional</label>
                    <input type="checkbox" name="status_operacional" className={styles.checkBox} checked={filters.status_operacional} onChange={handleChange} />
                    
                    <label>Tipo</label>
                    <input type="text" name="tipo" value={filters.tipo} onChange={handleChange} />

                    <label>Localização</label>
                    <input type="text" name="localizacao" value={filters.localizacao} onChange={handleChange} />

                    <button className={styles.botao} type="submit">Filtrar</button>
                </form>
            </div>
                
            <div className={styles.container}>
                <h1>Sensores Filtrados</h1>
            </div>
            {loading && <div>Carregando...</div>}
            {error && <div>Erro ao buscar sensores: {error.message}</div>}
            {submitted && sensores.length === 0 && <p className={styles.notFound}> <XCircle size={33} />Não existe nenhum sensor com essa característica!</p>}
            
            {submitted && sensores.length !== 0 &&                
                <div className={styles.containerTabela}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tipo</th>
                                    <th>Localização</th>
                                    <th>Responsável</th>
                                    <th>Longitude</th>
                                    <th>Latitude</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sensores.map(sensor => (
                                    <tr key={sensor.id}>
                                        <td>{sensor.id}</td>
                                        <td>{sensor.tipo}</td>
                                        <td>{sensor.localizacao}</td>
                                        <td>{sensor.responsavel}</td>
                                        <td>{sensor.longitude}</td>
                                        <td>{sensor.latitude}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
        </div>
    );
};


