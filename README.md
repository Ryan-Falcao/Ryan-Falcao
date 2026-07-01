#  Portfólio — Ryan Falcao

Portfólio pessoal desenvolvido com tema espacial dark, terminal animado e um modo RPG 8-bit experimental.

**Deploy:** _adicione o link aqui_
**Repositório:** [github.com/Ryan-Falcao](https://github.com/Ryan-Falcao)

---

## Destaques

- **Hero animado em terminal** — apresentação estilo linha de comando
- **Tema dark espacial** — visual imersivo e moderno
- **Modo RPG 8-bit** — easter egg experimental navegável
- **Seção de skills** — stack técnica organizada por categoria
- **Cards de projetos** — showcase dos principais trabalhos
- **Formulário de contato funcional** — integrado ao Supabase, com notificações por e-mail via Resend + Supabase Edge Functions

---

## Stack Técnica

| Camada | Tecnologias |
|---|---|
| Frontend | React, TypeScript, Vite |
| Estilização | CSS (tema dark customizado) |
| Backend/BaaS | Supabase (Database, Edge Functions) |
| E-mail | Resend |
| Deploy | Vercel |

---

## Estrutura do Projeto

```
├── src/
│   ├── components/     # Componentes reutilizáveis (hero, skills, cards, etc)
│   ├── pages/           # Páginas principais
│   ├── rpg/             # Modo RPG 8-bit experimental
│   └── lib/             # Integração com Supabase
├── public/
├── .env.example
└── vite.config.ts
```

---

##  Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/Ryan-Falcao/SEU-REPO.git
cd SEU-REPO

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Preencha com suas chaves do Supabase e Resend

# Rode o projeto
npm run dev
```

---

## Variáveis de Ambiente

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
RESEND_API_KEY=
```

> Nunca commite o arquivo `.env`. Ele já está incluso no `.gitignore`.

---

## Formulário de Contato

O formulário envia os dados para o Supabase e dispara uma notificação por e-mail via **Resend**, através de uma **Supabase Edge Function** acionada por webhook.

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se à vontade para se inspirar, mas evite copiar o conteúdo diretamente.

---

## Autor

**Ryan Falcao**
Full Stack Developer — React, TypeScript, PHP, Python, SQL, Supabase

- GitHub: [@Ryan-Falcao](https://github.com/Ryan-Falcao)
