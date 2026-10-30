import { NavLink } from 'react-router-dom';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <span className="marca">Catálogo de Filmes</span>
      <nav className="menu">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/criar">Criar</NavLink>
        <NavLink to="/alterar">Alterar</NavLink>
        <NavLink to="/apagar">Apagar</NavLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
