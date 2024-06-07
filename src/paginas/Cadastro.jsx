import { useForm } from 'react-hook-form'
import styles from './css/Cadastro.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const schemaPerfil = z.object({
    username: z.string().min(1, 'Informe um username').max(25, 'Máximo de 25 caracteres'),

    email: z.string().min(5, 'Mínimo de 5 caracteres'),

    senha: z.string().min(8, 'Informe 8 caracteres').max(8, 'Máximo de 8 caracteres'),

})

export function Cadastro(){

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(schemaPerfil)
    });

    // const obterToken = async () => {
    //     try {
    //         const response = await axios.post('http://10.0.2.2:8000/api/token', {
    //             username: "ambercf",
    //             password: "12345678"
    //         });
    //         const token = response.data.access;
    //         console.log(token);
    //         setToken(token);
    //     } catch (error) {
    //         console.error('Erro ao obter token:', error);
    //     }
    // };

    // useEffect(() => {
    //     obterToken();
    // }, []);

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_user', {
                username: data.username, 
                email: data.email,
                password: data.senha
            });
            const { access, refresh} = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            console.log('Usuário criado!');
            navigate('/');
            
        } catch(error) {
            console.error("Erro ao criar user", error);
        }
    }

    return (
        <div className={styles.general_container}>
            <div className={styles.container}>
                <h1>Cadastro</h1>
                <form className={styles.formulario} 
                onSubmit={handleSubmit(obterDadosFormulario)}>
                    <input
                    {...register('username')} // Pegando todos os recursos da funçõo register
                    placeholder="Username" 
                    className={styles.campo} />

                    {errors.username && (
                        <p> {errors.username.message} </p>
                    )}

                    <input {...register('email')}
                    placeholder="Email" 
                    className={styles.campo} />

                    
                    {errors.email && (
                        <p> {errors.email.message} </p>
                    )}

                    <input {...register('senha')}
                    placeholder="Senha" 
                    className={styles.campo} />

                    
                    {errors.senha && (
                        <p> {errors.senha.message} </p>
                    )}
                    
                    <button className={styles.botao}type='submit'>Confirmar</button>
                </form>
            </div>
        </div>
    )
}

