# Projeto Study Plan

Nome: Adan Victor Colaco

Esse projeto e uma API feita em Node.js com Express.
Ela recebe uma linguagem de programacao e algumas observacoes, manda para a API do Gemini e salva o plano de estudo no banco Postgres.

## O que foi usado

- Node.js
- Express
- MVC
- Postgres
- API do Gemini

## Como rodar

Primeiro instala as dependencias:

```bash
npm install
```

Depois copia o arquivo `.env.example` para `.env` e coloca os dados:

```bash
PORT=3000
GEMINI_API_KEY=sua_chave_do_gemini_aqui
DATABASE_URL=postgres://postgres:postgres@localhost:5432/studyplan_db
```

No Postgres precisa criar o banco `studyplan_db` e rodar o arquivo:

```bash
database/schema.sql
```

Depois para iniciar:

```bash
npm start
```

## Endpoint

### POST /studyplan

Body de exemplo:

```json
{
  "linguagem": "JavaScript",
  "observacoes": "Tenho dificuldade com funcoes, arrays e objetos"
}
```

Resposta de exemplo:

```json
{
  "mensagem": "Plano de estudo criado e salvo com sucesso.",
  "dados": {
    "id": 1,
    "linguagem": "JavaScript",
    "observacoes": "Tenho dificuldade com funcoes, arrays e objetos",
    "plano": "texto gerado pela IA",
    "criado_em": "2026-07-28T18:00:00.000Z"
  }
}
```

## MVC

- `routes`: onde fica a rota
- `controllers`: recebe a requisicao
- `models`: parte que salva no banco
- `services`: parte que chama o Gemini
