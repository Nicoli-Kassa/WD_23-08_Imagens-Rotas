import Header from './Componentes/Header';
import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer'; 

// Caso a foto esteja em outra pasta, devemos importa-la
import logoVite from './assests/vite.svg';

import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Header />
      {/* Caso a foto esteja dentro da pasta public, não precisa colocar o diretório,  */}
      <img src="vite.svg"/> 
      {/* Caso a foto esteja em outra pasta, depois de importa-la: */}
      <img src={logoVite}/>

      {/* Os filhos serão renderizado no outlet */}
      <Outlet/> 

      <Footer />
    </>
  )
}

export default App
