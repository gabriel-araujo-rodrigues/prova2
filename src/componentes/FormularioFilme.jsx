import { Link } from 'react-router-dom';

// Formulário reutilizado pelas páginas Criar e Alterar.
function FormularioFilme({ valores, setValores, onSubmit, textoEnviar, enviando }) {
  const atualiza = (campo) => (e) => setValores({ ...valores, [campo]: e.target.value });

  return (
    <form onSubmit={onSubmit} className="formulario">
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={valores.nome} onChange={atualiza('nome')}
             placeholder="Ex.: Cidade de Deus" required />

      <label htmlFor="genero">Gênero</label>
      <input id="genero" type="text" value={valores.genero} onChange={atualiza('genero')}
             placeholder="Ex.: Drama" required />

      <label htmlFor="ano">Ano</label>
      <input id="ano" type="text" inputMode="numeric" pattern="[0-9]{4}" maxLength={4}
             value={valores.ano} onChange={atualiza('ano')}
             placeholder="Ex.: 2002" title="Informe 4 dígitos" required />

      <div className="acoes">
        <button type="submit" className="botao" disabled={enviando}>{textoEnviar}</button>
        <Link to="/" className="botao secundario">Cancelar</Link>
      </div>
    </form>
  );
}

export default FormularioFilme;
