import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './rotas/Rotas'


function App() {

  return (
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
  )
}

export default App
