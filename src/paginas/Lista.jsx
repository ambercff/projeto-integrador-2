import styles from './css/Lista.module.css'
import { Card } from '../components/Card'
import { Localizador } from '../components/Localizador'
import { useState } from 'react'
import { useEffect } from 'react'
export function Lista() {
        const [localizadores, setLocalizadores] = useState([])

        const apiKey = "463b673acdba7a22464fe15b256fac00"

        useEffect( () => {
            fetch(`
            https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=pt-BR`)
            .then( resposta => resposta.json() )
            .then( dados => setLocalizadores(dados.results))
        }, [])

        return (

            <main className={styles.container}> 
                { localizadores.map( umLocalizador => <Localizador propsLocalizador = {umLocalizador} /> ) }
            </main>
        )
}