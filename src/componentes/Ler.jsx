import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api';

function Ler() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.get(`/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => {
        console.log(err);
        setErro(true);
      });
  }, [id]);

  return (
    <section className="cartao">
      <h1>Dados do filme</h1>

      {erro && <p className="mensagem erro">Filme não encontrado.</p>}
      {!erro && !filme && <p>Carregando...</p>}

      {filme && (
        <dl className="detalhes">
          <dt>ID</dt>
          <dd>{filme.id}</dd>
          <dt>Nome</dt>
          <dd>{filme.nome}</dd>
          <dt>Gênero</dt>
          <dd>{filme.genero}</dd>
          <dt>Ano</dt>
          <dd>{filme.ano}</dd>
        </dl>
      )}

      <div className="acoes">
        <Link to="/" className="botao secundario">Cancelar</Link>
      </div>
    </section>
  );
}

export default Ler;
