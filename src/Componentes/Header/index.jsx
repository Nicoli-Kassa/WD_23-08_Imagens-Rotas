import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meu site</h1>
      <nav>
        <ul>
          {/* ctrl + d => seleciona componentes iguais */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="">Serviços</Link></li>
          <li><Link to="">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
