import styles from './css/Cabecalho.module.css'
import { MapPinArea } from '@phosphor-icons/react'

export function Cabecalho () {
    return (
        <header className={styles.container}>
            <p>Localizadores</p> 
            <MapPinArea size={32} color='#fff'/>
        </header>
    )
}