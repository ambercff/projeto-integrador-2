import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './css/CadastroSensores.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//Schema de validação do formulário para checagem dos valores que foram colocados no form
const schemaAlterarSensor = z.object({
    mac_address: z.string().max(20, 'Máximo de 20 caracteres').nullable(),
    latitude: z.number().refine(val => !isNaN(parseFloat(val)), 'Latitude inválida'),
    longitude: z.number().refine(val => !isNaN(parseFloat(val)), 'Longitude inválida'),
    localizacao: z.string().max(100, 'Máximo de 100 caracteres'),
    responsavel: z.string().max(100, 'Máximo de 100 caracteres'),
    unidade_medida: z.string().max(20, 'Máximo de 20 caracteres').nullable(),
    status_operacional: z.boolean(),
    observacao: z.string().nullable(),
    tipo: z.string().optional() 
});

export function AlterarSensor() {
    const navigate = useNavigate();
    const { id } = useParams();//pegando o ID da URL
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(schemaAlterarSensor)//chamar o schema e ver os erros possoveis
    });
    //faço uma consulta do sensor do id passado (chave)  
    const obterDadosSensor = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.get(`http://127.0.0.1:8000/api/sensores/${id}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const sensorData = response.data;
            Object.keys(sensorData).forEach(key => {
                setValue(key, sensorData[key]);
            });
        } catch (err) {
            console.error('Erro ao obter o sensor', err);
        }
    };
     //exibo em tela os dados do id passado  
    useEffect(() => {
        obterDadosSensor();
    }, [id]);

    //pego os dados colocados no formulário e passo para o PUT!!o data aqui é o conj de info do form
    const onSubmit = async (data) => {

        console.log("Dados enviados para o PUT:", data);
        try {
            const token = localStorage.getItem('access_token');
            //chamo a api passando "data"
            await axios.put(`http://127.0.0.1:8000/api/sensores/${id}/`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Sensor alterado com sucesso!');
            navigate('/inicial');
        } catch (error) {
            console.error('Erro ao alterar o sensor', error);
        }
    };

    return (
        <div className={styles.conteiner}>
            <form className={styles.formulario} onSubmit={handleSubmit(onSubmit)}>
                <label>Tipo</label>
                <select {...register('tipo')} className={styles.campo}>
                    <option value="">Selecione o tipo de sensor</option>
                    <option value="Temperatura">Temperatura</option>
                    <option value="Contador">Contador</option>
                    <option value="Luminosidade">Luminosidade</option>
                    <option value="Umidade">Umidade</option>
                </select>
                {errors.tipo && <p className={styles.mensagem}>{errors.tipo.message}</p>}

                <label>Mac Address</label>
                <input {...register('mac_address')} className={styles.campo} />
                {errors.mac_address && <p className={styles.mensagem}>{errors.mac_address.message}</p>}

                <label>Latitude</label>
                <input {...register('latitude')} className={styles.campo} />
                {errors.latitude && <p className={styles.mensagem}>{errors.latitude.message}</p>}

                <label>Longitude</label>
                <input {...register('longitude')} className={styles.campo} />
                {errors.longitude && <p className={styles.mensagem}>{errors.longitude.message}</p>}

                <label>Localização</label>
                <input {...register('localizacao')} className={styles.campo} />
                {errors.localizacao && <p className={styles.mensagem}>{errors.localizacao.message}</p>}

                <label>Responsável</label>
                <input {...register('responsavel')} className={styles.campo} />
                {errors.responsavel && <p className={styles.mensagem}>{errors.responsavel.message}</p>}

                <label>Unidade Medida</label>
                <input {...register('unidade_medida')} className={styles.campo} />
                {errors.unidade_medida && <p className={styles.mensagem}>{errors.unidade_medida.message}</p>}

                <label>Status Operacional</label>
                <input {...register('status_operacional')} type="checkbox" />
                
                <label>Observação</label>
                <textarea {...register('observacao')} className={styles.campo}></textarea>
                {errors.observacao && <p className={styles.mensagem}>{errors.observacao.message}</p>}

                <button type="submit" className={styles.botao}>Salvar Alterações</button>
            </form>
        </div>
    );
}
