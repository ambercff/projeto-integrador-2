import styles from './css/Inicial.module.css'
import { Cabecalho } from '../components/Cabecalho' 
import { Lateral } from '../components/Lateral'
import { Outlet } from 'react-router-dom'

export function Inicial() {

  return (
      <div className={styles.gridConteiner}>
        <Cabecalho/>
        <Lateral/>
        <Outlet />
      </div>
  )
}
