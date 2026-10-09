# Portfólio — Ryan Falcão

React e Vite. Apresentação de desenvolvedor backend com foco em Java e Spring Boot.

## Rodar

```sh
npm install
npm run dev
```

`npm run build` gera os arquivos de produção em `dist`. `npm run preview` permite conferir essa versão.

## Personalização

- **Foto:** crie `public/images`, coloque sua foto como `ryan.webp` e altere `profilePhoto` no início de `src/main.jsx` para `'/images/ryan.webp'`. Enquanto não houver foto, é exibida uma paisagem real.
- **Sobre mim:** edite os dois parágrafos em `about-copy`. O texto atual usa apenas o nome e o foco técnico informados; formação, empresas e tempo de experiência não foram inventados.
- **Projetos:** preencha `projects` no início de `src/main.jsx` com objetos contendo `title`, `description`, `tags` e `url`. O layout troca automaticamente a mensagem de espera pelos projetos.
- **Certificados:** preencha `certificates` com `title`, `issuer`, `year` e `url`. Use URLs públicas ou arquivos dentro de `public`.
- **Contato:** `email` e `whatsapp` estão no início de `src/main.jsx`.

## Imagens e estilo

Fotografias reais, servidas pelo Unsplash, dependem de internet:

- Lago e floresta: https://unsplash.com/photos/WeFDiEDModQ — Luca Bravo.
- Montanhas e reflexos: https://unsplash.com/photos/JaNtL4uGvG8 — Anne-Sophie Benoit.

O efeito inspirado em Liquid Glass usa transparência, desfoque de fundo, bordas iluminadas e sombras internas. Navegadores sem suporte recebem painéis opacos para preservar a leitura. Fontes DM Sans e Manrope são carregadas pelo Google Fonts, com fontes locais de fallback.
