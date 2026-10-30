import { Link } from 'react-router-dom';

// Caixa para digitar o id do filme, usada em Alterar e Apagar.
function BuscaPorId({ id, setId, onProcurar, buscando }) {
  return (
    <form onSubmit={onProcurar} className="formulario">
      <label htmlFor="id">ID do filme</label>
      <input id="id" type="text" value={id} onChange={e => setId(e.target.value)}
             placeholder="Ex.: 3" required />
      <div className="acoes">
        <button type="submit" className="botao" disabled={buscando}>Procurar</button>
        <Link to="/" className="botao secundario">Cancelar</Link>
      </div>
    </form>
  );
}

export default BuscaPorId;
