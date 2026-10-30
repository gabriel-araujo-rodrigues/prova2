import axios from 'axios';

// ATENÇÃO: troque pela URL do SEU recurso "filmes" criado no mockapi.io.
// Formato: https://<SEU_ID>.mockapi.io/filmes
export const API_URL = 'https://6ae3e06f933120ae20f940be.mockapi.io/filmes';

// Instância do axios já apontando para a API.
// api.get('')        -> lista todos os filmes
// api.get('/' + id)  -> busca um filme
// api.post('', dados), api.put('/' + id, dados), api.delete('/' + id)
export const api = axios.create({ baseURL: API_URL });
