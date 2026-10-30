import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import BuscaPorId from './BuscaPorId';

function Apagar() {
  const [id, setId] = useState('');
  const [filme, setFilme] = useState(null);
  // 'inicial' | 'buscando' | 'achou' | 'naoachou' | 'erro'
  const [status, setStatus] = useState('inicial');
  const [apagando, setApagando] = useState(false);
  const navigate = useNavigate();

  const handleProcurar = (event) => {
    event.preventDefault();
    setStatus('buscando');
    api.get(`/${id.trim()}`)
      .then(res => {
        setFilme(res.data);
        setStatus('achou');
      })
      .catch(err => {
        console.log(err);
        setStatus(err.response && err.response.status === 404 ? 'naoachou' : 'erro');
      });
  };

  const handleApagar = () => {
    setApagando(true);
    api.delete(`/${filme.id}`)
      .then(() => navigate('/'))
      .catch(err => {
        console.log(err);
        setApagando(false);
        setStatus('erro');
      });
  };

  return (
    <section className="cartao">
      <h1>Apagar filme</h1>

      {(status === 'inicial' || status === 'buscando') && (
        <BuscaPorId id={id} setId={setId} onProcurar={handleProcurar} buscando={status === 'buscando'} />
      )}

      {status === 'achou' && (
        <>
          <p>Confira os dados antes de apagar:</p>
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
          <div className="acoes">
            <button type="button" className="botao perigo" onClick={handleApagar} disabled={apagando}>
              Apagar
            </button>
            <Link to="/" className="botao secundario">Cancelar</Link>
          </div>
        </>
      )}

      {status === 'naoachou' && (
        <>
          <p className="mensagem erro">Nenhum filme encontrado com o ID {id}.</p>
          <div className="acoes">
            <Link to="/" className="botao secundario">Voltar para o início</Link>
          </div>
        </>
      )}

      {status === 'erro' && (
        <>
          <p className="mensagem erro">Ocorreu um erro ao falar com o servidor.</p>
          <div className="acoes">
            <Link to="/" className="botao secundario">Voltar para o início</Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Apagar;
