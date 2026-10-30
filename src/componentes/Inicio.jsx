import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';

function Inicio() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.get('')
      .then(res => setFilmes(res.data))
      .catch(err => {
        console.log(err);
        setErro(true);
      })
      .finally(() => setCarregando(false));
  }, []);

  return (
    <section className="cartao">
      <h1>Filmes cadastrados</h1>

      {carregando && <p>Carregando...</p>}
      {erro && <p className="mensagem erro">Não foi possível carregar os filmes. Confira a URL da API em src/api.js.</p>}

      {!carregando && !erro && filmes.length === 0 && (
        <p>Nenhum filme cadastrado. <Link to="/criar">Cadastre o primeiro.</Link></p>
      )}

      {filmes.length > 0 && (
        <ul className="ingressos">
          {filmes.map(f => (
            <li key={f.id}>
              <Link to={`/ler/${f.id}`} className="ingresso">
                <span className="numero">{f.id}</span>
                <span className="titulo-filme">{f.nome}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Inicio;
