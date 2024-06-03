import {Routes, Route} from 'react-router-dom'
import { Login } from "../paginas/Login";
import { Cadastro } from "../paginas/Cadastro";
import { Inicial } from '../paginas/Inicial';
import { CadastroSensores } from '../paginas/CadastroSensores';
import {Localizacao} from '../paginas/Localizacao'
import {Sensor} from '../paginas/Sensor'
import { Filtro } from '../paginas/Filtro';

export function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/inicial' element={<Inicial/>}>
                <Route index element={ <Sensor /> } />
                <Route path='cadastro_sensores' element={<CadastroSensores/>}/>
                <Route path='localizacao' element={ <Localizacao /> } />
                <Route path='filtro' element={ <Filtro /> } />
            </Route>
        </Routes>
    )

}
