import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import FormularioFilme from './FormularioFilme';

function Criar() {
  const [valores, setValores] = useState({ nome: '', genero: '', ano: '' });
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviando(true);
    setErro(false);
    api.post('', valores)
      .then(() => navigate('/'))
      .catch(err => {
        console.log(err);
        setErro(true);
        setEnviando(false);
      });
  };

  return (
    <section className="cartao">
      <h1>Criar filme</h1>
      {erro && <p className="mensagem erro">Não foi possível salvar. Tente novamente.</p>}
      <FormularioFilme
        valores={valores}
        setValores={setValores}
        onSubmit={handleSubmit}
        textoEnviar="Criar"
        enviando={enviando}
      />
    </section>
  );
}

export default Criar;
