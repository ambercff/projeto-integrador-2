import styles from './css/Localizador.module.css'
import { Card } from './Card'

export function Localizador({propsLocalizador}) {
    return (

        <Card>
            <figure className={styles.container}>
                <img src={`https://image.tmdb.org/t/p/w400/${propsLocalizador.poster_path}`} />
                <figcaption>  {propsLocalizador.title} </figcaption>
                <p>{propsLocalizador.overview}</p>
                <p>{propsLocalizador.vote_average.toFixed(2)}</p>
            </figure>
        </Card>
    )
}