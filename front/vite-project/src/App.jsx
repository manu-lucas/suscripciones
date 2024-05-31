import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Suscripcion from './pages/Suscripcion'
import FormularioPreferenc from './pages/FormularioPreferenc'
import LinkPagos from './pages/LinkPagos'
import Planes from './pages/Planes'
import PagoExitoso from "./pages/PagoExitoso"
import { createBrowserRouter, RouterProvider } from "react-router-dom";



let router = createBrowserRouter([
  {
    path: "/",
    element: < Planes/>,
  },
  {
    path: "/suscripcion/:id",
    element: <Suscripcion />,
  },
  {
    path:"/pagoexitoso",
    element:<PagoExitoso/>
  }

 
]);



function App() {


    return <RouterProvider router={router} />;

  
}

export default App
