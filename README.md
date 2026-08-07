# DevSpace

Portfólio pessoal de **Francisco Hauch** — React, TypeScript, Tailwind CSS e Vite.

Publicado em <https://morbidmango873.github.io/DevSpace/>.

O visual segue o design system **Modernist**: fundo claro, um único acento
vermelho, tipografia Archivo, canto zero e réguas fortes de 2px separando as
seções. Fotografia sempre em preto e branco.

## Rodando localmente

```bash
npm install
npm run dev
```

O Vite sobe em <http://localhost:5173/DevSpace/> — repare no sufixo `/DevSpace/`,
que existe porque o site é servido a partir de um subcaminho no GitHub Pages.

| Script              | O que faz                                        |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desenvolvimento com hot reload        |
| `npm run typecheck` | Checagem de tipos                                 |
| `npm run lint`      | ESLint                                            |
| `npm run build`     | Checa os tipos e gera o site em `dist/`           |
| `npm run preview`   | Serve o build de produção para conferência local  |

## Como o projeto é organizado

```
src/
├── content/     Todo o texto e os dados do site (bilíngue)
├── i18n/        Troca de idioma e textos de interface
├── components/  Peças reutilizáveis (navegação, cards, tags, rodapé)
├── sections/    As seções da página (Hero, Projects, About, Journey, Contact)
├── hooks/       Comportamentos compartilhados (revelar ao rolar, seção ativa)
└── index.css    Design tokens
```

A ideia central é que **conteúdo, idioma e aparência sejam três coisas separadas**.
Na prática:

- para mudar um texto ou adicionar um projeto, mexa só em `src/content/`;
- para mudar cores, fontes ou espaçamento, mexa só nos tokens em `src/index.css`;
- nenhum componente contém texto fixo ou cor literal.

### Editando o conteúdo

| Quero mudar…                           | Arquivo                     |
| -------------------------------------- | --------------------------- |
| Nome, bio, manchete, e-mail, redes     | `src/content/profile.ts`    |
| Projetos e os filtros por tecnologia   | `src/content/projects.ts`   |
| Tecnologias da régua de skills         | `src/content/skills.ts`     |
| Formação e trajetória                  | `src/content/experience.ts` |
| Rótulos de interface (botões, títulos) | `src/i18n/translations.ts`  |

Textos que aparecem para o visitante têm sempre as duas versões:

```ts
description: {
  pt: 'Aplicação full stack para gestão de consultas.',
  en: 'Full stack application for managing appointments.',
}
```

Esquecer a versão em inglês de um rótulo de interface vira erro de compilação —
`npm run typecheck` acusa antes de o site ir ao ar com um buraco.

Detalhes que se cuidam sozinhos: a numeração dos projetos (01, 02, …), a
contagem de cada filtro e o "05 projetos publicados" do topo saem todos da lista
em `projects.ts`. Um projeto sem `repoUrl` esconde o link em vez de apontar para
um endereço inexistente, e um sem `demoUrl` esconde o botão de demo.

### Pendências deixadas de propósito

Três pontos precisam de informação que só você tem:

1. **`src/content/experience.ts`** tem itens marcados com `PREENCHER` — os
   campos de formação. Preferi deixá-los em branco a preencher por suposição.
2. **`Bot_Twitch`** aparece nos projetos sem link: não existe repositório
   público com esse nome na conta (os bots publicados hoje são `Post_Bot` e
   `Clip_Bot`). Publique o repositório e acrescente o `repoUrl`.
3. **Currículo em PDF** — o design prevê essa linha na seção de contato. Há um
   comentário em `profile.ts` com a linha pronta; basta pôr o arquivo em
   `public/` e descomentar.

### Mudando a aparência

Todas as cores, fontes e espaçamentos são variáveis CSS em `src/index.css`, sob
o comentário `DESIGN TOKENS`, transcritas do `styles.css` do projeto de design.
O `tailwind.config.js` apenas dá nomes de utilitário a elas (`bg-surface`,
`text-accent`, `border-divider`).

Retunar a paleta inteira é editar aquele bloco — nenhum componente precisa ser
aberto. As cores ficam em canais RGB separados por espaço (`243 242 242`, e não
`#f3f2f2`) porque é isso que permite usar transparência sobre um token, como em
`bg-accent/10`.

Duas regras do sistema que valem lembrar ao mexer: texto em tamanho de parágrafo
no acento usa `text-accent-700`, não `text-accent` — o acento puro não alcança
contraste de leitura sobre o fundo claro. E rótulos de botão ficam alinhados à
esquerda, mesmo quando o botão ocupa a linha toda.

## Formulário de contato

O site é estático, então não há servidor para receber um POST. O botão monta um
`mailto:` com nome, e-mail e mensagem já preenchidos e entrega ao programa de
e-mail do visitante — o texto abaixo do botão avisa isso.

Para receber as mensagens direto no site, troque o `handleSubmit` em
`src/sections/Contact.tsx` por um POST a um serviço de formulários; o resto da
seção não muda.

## Deploy

O deploy é automático: todo push na `main` dispara
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que checa os
tipos, roda o lint, faz o build e publica no GitHub Pages. Pull requests passam
pelas mesmas verificações, sem publicar.

Não existe mais uma pasta `docs/` versionada — o site publicado é gerado pelo CI
a cada push, e não copiado à mão para dentro do repositório.

> **Passo obrigatório, uma única vez:** em **Settings → Pages**, mude *Source*
> de "Deploy from a branch" para **"GitHub Actions"**. Sem isso o workflow roda
> mas não consegue publicar.

### Domínio próprio

O caminho base do site fica em `vite.config.ts` e pode ser trocado por variável
de ambiente. Se um dia houver domínio próprio, publique com `VITE_BASE=/`.

## Acessibilidade

O que já está coberto, e convém não perder ao mexer: link "pular para o
conteúdo" como primeiro elemento focável, foco de teclado visível em tudo
(régua de 2px no acento), menu mobile que fecha no `Esc`, `aria-current` no item
de navegação da seção em que você está, rótulos ligados aos campos do
formulário, e as animações de entrada desligadas para quem pediu "reduzir
movimento" no sistema.
