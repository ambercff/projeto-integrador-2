import { useForm } from 'react-hook-form'
import styles from './css/Perfil.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaPerfil = z.object({
    nome: z.string().min(1, 'Informe um nome').max(25, 'Máximo de 25 caracteres'),

    usuario: z.string().min(5, 'Mínimo de 5 caracteres').max(10, 'Máximo de 10 caracteres'),

    senha: z.string().min(8, 'Informe 8 caracteres').max(8, 'Máximo de 8 caracteres'),

})

export function CadastroSensores() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data) {
        console.log(`Tipo: ${data.tipo}`)
        console.log(`Usuário: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }

    return (
        <div className={styles.container}>
            <form className={styles.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}>
                <p className={styles.titulo}>Cadastro Sensores</p>
                <input
                    {...register('tipo')} // Pegando todos os recursos da funçõo register
                    placeholder="Tipo"
                    className={styles.campo} />

                {errors.tipo && (
                    <p> {errors.tipo.message} </p>
                )}

                <input {...register('mac_address')}
                    placeholder="Mac Address"
                    className={styles.campo} />


                {errors.mac_address && (
                    <p> {errors.mac_address.message} </p>
                )}

                <input {...register('latitude')}
                    placeholder="Latitude"
                    className={styles.campo} />


                {errors.latitude && (
                    <p> {errors.latitude.message} </p>
                )}


                <input {...register('longitude')}
                    placeholder="Longitude"
                    className={styles.campo} />


                {errors.longitude && (
                    <p> {errors.longitude.message} </p>
                )}

                <input {...register('localizacao')}
                    placeholder="Localização"
                    className={styles.campo} />


                {errors.localizacao && (
                    <p> {errors.localizacao.message} </p>
                )}

                <input {...register('responsavel')}
                    placeholder="Responsável"
                    className={styles.campo} />


                {errors.responsavel && (
                    <p> {errors.responsavel.message} </p>
                )}

                <input {...register('unidade_medida')}
                    placeholder="Unidade de Medida"
                    className={styles.campo} />


                {errors.unidade_medida && (
                    <p> {errors.unidade_medida.message} </p>
                )}

                <input {...register('status')}
                    placeholder="Status Operacional"
                    className={styles.campo} />


                {errors.status && (
                    <p> {errors.status.message} </p>
                )}

                <input {...register('observacao')}
                    placeholder="Observação"
                    className={styles.campo} />


                {errors.observacao && (
                    <p> {errors.observacao.message} </p>
                )}
                <button className={styles.botao}>Confirmar</button>
            </form>
        </div>
    )
}

