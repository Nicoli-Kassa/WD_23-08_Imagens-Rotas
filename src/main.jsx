import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Importa a rota da página sobre
import Sobre from './pages/Sobre.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'

// Guardando um método em uma const
const constRouter = createBrowserRouter([
  // Dentro do método haverá um Array [] de objetos {}
  {
    // Objetos:
    path: "/",
    element: <App/>, 
    children: [
      {index: true, element: <ConteudoPrincipal/>}, // Filho padrão
      {path: "/sobre", element: <Sobre/>}
    ]
  },
  // {
  //   path: "/sobre",
  //   element: <Sobre/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={constRouter}/>
  </React.StrictMode>,
)
