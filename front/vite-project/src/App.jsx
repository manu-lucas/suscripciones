import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Suscripcion from './pages/Suscripcion'
import FormularioPreferenc from './pages/FormularioPreferenc'
import LinkPagos from './pages/LinkPagos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <FormularioPreferenc/> */}

    <Suscripcion/>

    {/* <LinkPagos/> */}
    </>
  )
}

export default App
