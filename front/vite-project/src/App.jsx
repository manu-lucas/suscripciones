import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Suscripcion from './pages/Suscripcion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suscripcion/>
    </>
  )
}

export default App
