import styles from './css/Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaLogin = z.object({
    usuario: z.string()
        .min(5, "O minimo é de 5 caracteres")
        .max(20, "O maximo são 20 caracteres"),
    senha: z.string()
        .min(8, "Informe 8 caracteres")
        .max(20, "O maximo são 20 caracteres"),
});

export function Login() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token', {
                username: data.usuario,
                password: data.senha
            });
            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log("Login bem sucedido");
            navigate('/inicial');
        }
        catch (error) {
            console.log("Erro na autenticação", error);
        }
    }

    return (
        <div className={styles.general_container}>
            <div className={styles.container}>
                <h1>Login</h1>
                <form className={styles.formulario} onSubmit={obterDadosFormulario}>
                    <input
                        {...register('usuario')}
                        className={styles.campo}
                        placeholder="Usuário"
                    />
                    {errors.usuario && (
                        <p>{errors.usuario.message}</p>
                    )}
                    <input
                        {...register('senha')}
                        type="password"
                        className={styles.campo}
                        placeholder="Senha"
                    />
                    {errors.senha && (
                        <p>{errors.senha.message}</p>
                    )}
                    <button className={styles.botao}>Entrar</button>
                </form>
                <div className={styles.container_cadastro}>
                    <p> Não tem uma conta?</p> <Link to='cadastro'> Cadastre-se! </Link>
                </div>
            </div>
        </div>
    )
}

