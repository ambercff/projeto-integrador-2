import {Routes, Route} from 'react-router-dom'
import { Lista } from "../paginas/Lista";
import { Login } from "../paginas/Login";
import { Cadastro } from "../paginas/Cadastro";
import { Inicial } from '../paginas/Inicial';
import { CadastroSensores } from '../paginas/CadastroSensores';

export function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/inicial' element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path='cadastro_sensores' element={<CadastroSensores/>}/>
            </Route>
        </Routes>
    )

}
