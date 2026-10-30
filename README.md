# Catálogo de Filmes (PRW2 – Avaliação 2)

CRUD de filmes feito com React, React Router DOM e Axios. A API é simulada com o mockapi.io.

Dados de cada filme: `id`, `nome`, `genero`, `ano` (todos String).

## Páginas

| Rota | Página |
|------|--------|
| `/` | Início: lista ID e nome; clicar no nome abre a página Ler |
| `/ler/:id` | Ler: todos os dados do filme e botão Cancelar |
| `/criar` | Criar: formulário, Criar e Cancelar |
| `/alterar` | Alterar: digita o ID, procura, edita (renderização condicional) |
| `/apagar` | Apagar: digita o ID, procura, confirma |

## Configurar a API (mockapi.io)

1. Crie um projeto no mockapi.io (vazio, sem recursos).
2. Crie um recurso chamado `filmes`.
3. Deixe apenas os campos `nome`, `genero` e `ano`, todos do tipo String. O `id` já existe.
4. Copie a URL do recurso (`https://SEU_ID.mockapi.io/filmes`) e cole em `src/api.js`, na constante `API_URL`.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar

1. Suba o projeto no GitHub.
2. No Vercel, importe o repositório (Framework: Vite). O arquivo `vercel.json` já cuida das rotas do React Router.
3. Entregue o link do GitHub e o link do Vercel.
