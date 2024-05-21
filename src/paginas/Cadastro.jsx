import { useForm } from 'react-hook-form'
import styles from './css/Perfil.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaPerfil = z.object({
    nome: z.string().min(1, 'Informe um nome').max(25, 'Máximo de 25 caracteres'),

    usuario: z.string().min(5, 'Mínimo de 5 caracteres').max(10, 'Máximo de 10 caracteres'),

    senha: z.string().min(8, 'Informe 8 caracteres').max(8, 'Máximo de 8 caracteres'),

})

export function Cadastro(){

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data) {
        console.log(`Nome: ${data.nome}`)
        console.log(`Usuário: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }

    return (
        <div className={styles.container}>
            <form className={styles.formulario} 
            onSubmit={handleSubmit(obterDadosFormulario)}>
                <p className={styles.titulo}>Cadastro</p>
                <input
                {...register('nome')} // Pegando todos os recursos da funçõo register
                placeholder="Nome" 
                className={styles.campo} />

                {errors.nome && (
                    <p> {errors.nome.message} </p>
                )}

                <input {...register('usuario')}
                placeholder="Usuário" 
                className={styles.campo} />

                
                {errors.usuario && (
                    <p> {errors.usuario.message} </p>
                )}

                <input {...register('senha')}
                placeholder="Senha" 
                className={styles.campo} />

                
                {errors.senha && (
                    <p> {errors.senha.message} </p>
                )}
                <button className={styles.botao}>Confirmar</button>
            </form>
        </div>
    )
}

