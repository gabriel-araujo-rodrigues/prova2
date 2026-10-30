import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import BuscaPorId from './BuscaPorId';
import FormularioFilme from './FormularioFilme';

function Alterar() {
  const [id, setId] = useState('');
  const [valores, setValores] = useState({ nome: '', genero: '', ano: '' });
  // 'inicial' | 'buscando' | 'achou' | 'naoachou' | 'erro'
  const [status, setStatus] = useState('inicial');
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const handleProcurar = (event) => {
    event.preventDefault();
    setStatus('buscando');
    api.get(`/${id.trim()}`)
      .then(res => {
        setValores(res.data);
        setStatus('achou');
      })
      .catch(err => {
        console.log(err);
        setStatus(err.response && err.response.status === 404 ? 'naoachou' : 'erro');
      });
  };

  const handleAlterar = (event) => {
    event.preventDefault();
    setEnviando(true);
    api.put(`/${valores.id}`, { nome: valores.nome, genero: valores.genero, ano: valores.ano })
      .then(() => navigate('/'))
      .catch(err => {
        console.log(err);
        setEnviando(false);
        setStatus('erro');
      });
  };

  return (
    <section className="cartao">
      <h1>Alterar filme</h1>

      {(status === 'inicial' || status === 'buscando') && (
        <BuscaPorId id={id} setId={setId} onProcurar={handleProcurar} buscando={status === 'buscando'} />
      )}

      {status === 'achou' && (
        <FormularioFilme
          valores={valores}
          setValores={setValores}
          onSubmit={handleAlterar}
          textoEnviar="Alterar"
          enviando={enviando}
        />
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

export default Alterar;
