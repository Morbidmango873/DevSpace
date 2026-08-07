import { profile } from './profile';
import type { Project } from './types';

const repo = (name: string) => `https://github.com/${profile.githubUser}/${name}`;

/**
 * Projetos exibidos na seção "Projetos", na ordem em que aparecem.
 *
 * A numeração (01, 02, …) e as contagens do filtro por stack são derivadas
 * desta lista — adicionar um projeto é adicionar um objeto aqui.
 *
 * Os endereços de repositório foram conferidos contra os repositórios públicos
 * da conta. Ver a observação do Bot da Twitch abaixo.
 */
export const projects: Project[] = [
  {
    id: 'medcare',
    title: 'MedCare',
    description: {
      pt: 'Aplicação full stack para gestão de consultas médicas. Front-end em React consumindo uma API REST em Node.js e Express, com dados persistidos em MySQL.',
      en: 'Full stack application for managing medical appointments. React front-end consuming a REST API built with Node.js and Express, with data persisted in MySQL.',
    },
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
    repoUrl: repo('Medcare'),
    featured: true,
  },
  {
    id: 'devspace',
    title: 'DevSpace',
    description: {
      pt: 'Este portfólio. React com TypeScript e Vite, conteúdo centralizado em um único módulo e interface bilíngue PT/EN.',
      en: 'This portfolio. React with TypeScript and Vite, content centralised in a single module and a bilingual PT/EN interface.',
    },
    stack: ['React', 'TypeScript', 'Vite'],
    repoUrl: repo('DevSpace'),
    demoUrl: profile.siteUrl,
  },
  {
    id: 'bot-twitch',
    title: 'Bot_Twitch',
    description: {
      pt: 'Bot de chat para a Twitch: comandos personalizados, respostas automáticas e integração com a API da plataforma.',
      en: 'Twitch chat bot: custom commands, automated replies and integration with the platform API.',
    },
    stack: ['Node.js', 'API'],
    // ATENÇÃO: não existe repositório público chamado Bot_Twitch na sua conta —
    // os bots publicados hoje são Post_Bot e Clip_Bot. Deixei sem `repoUrl` de
    // propósito: o card esconde o link em vez de apontar para um 404.
    // Publique o repositório e acrescente `repoUrl: repo('Bot_Twitch')` aqui.
  },
  {
    id: 'interpretador',
    title: 'Interpretador',
    description: {
      pt: 'Interpretador de uma linguagem própria: análise léxica, construção da árvore sintática e avaliação das expressões.',
      en: 'Interpreter for a custom language: lexical analysis, syntax tree construction and expression evaluation.',
    },
    stack: ['Python', 'Compiladores'],
    repoUrl: repo('Interpretador'),
  },
  {
    id: 'trabalho-react',
    title: 'TrabalhoReact',
    description: {
      pt: 'Aplicação acadêmica em React: componentes reutilizáveis, navegação por rotas e consumo de uma API pública.',
      en: 'Academic React application: reusable components, route-based navigation and consumption of a public API.',
    },
    stack: ['React', 'Rotas'],
    repoUrl: repo('TrabalhoReact'),
  },
];

/**
 * Quais tecnologias viram botão de filtro, nesta ordem.
 *
 * A lista é explícita porque a escolha é editorial, não estatística: o design
 * prevê uma régua curta com as tecnologias que de fato separam um projeto do
 * outro. Derivar isso das tags produziria onze botões — e um critério
 * automático por frequência cortaria justamente Python, que só aparece uma vez
 * mas caracteriza o projeto inteiro.
 *
 * As tags que não estão aqui continuam visíveis dentro de cada card.
 */
const FILTER_TAGS = ['React', 'Node.js', 'Python', 'MySQL'];

/**
 * Opções do filtro, cada uma com quantos projetos casam com ela.
 *
 * As contagens são calculadas, nunca escritas à mão: acrescentar um projeto
 * atualiza os números sozinho. Um filtro que não casa com nenhum projeto é
 * descartado, para não existir botão que leva a uma grade vazia.
 */
export function stackFilters(): { label: string; count: number }[] {
  return FILTER_TAGS.map((label) => ({
    label,
    count: projects.filter((project) => project.stack.includes(label)).length,
  })).filter((filter) => filter.count > 0);
}
