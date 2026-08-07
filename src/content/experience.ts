import type { TimelineEntry } from './types';

/**
 * Linha do tempo de experiência e formação.
 *
 * ATENÇÃO — os itens marcados com `PREENCHER` são modelos: eu não tenho como
 * saber sua formação nem seu histórico profissional, e preferi deixar o campo
 * em branco a inventar um dado que você teria de desmentir numa entrevista.
 * Edite ou remova esses itens antes de publicar.
 *
 * Os demais itens foram montados a partir dos seus repositórios públicos e das
 * datas dos commits — confira se batem com a sua memória.
 *
 * A ordenação é automática por `startYear` (mais recente primeiro).
 */
export const timeline: TimelineEntry[] = [
  {
    id: 'formacao-atual',
    kind: 'education',
    role: {
      pt: 'PREENCHER — nome do curso',
      en: 'FILL IN — course name',
    },
    organization: 'PREENCHER — instituição',
    period: {
      pt: 'PREENCHER — ex.: 2024 — atual',
      en: 'FILL IN — e.g. 2024 — present',
    },
    description: {
      pt: 'PREENCHER — uma ou duas frases sobre o que você estuda e o que mais te interessa dentro do curso.',
      en: 'FILL IN — a sentence or two about what you study and what interests you most within the course.',
    },
    startYear: 2024,
  },
  {
    id: 'devspace',
    kind: 'work',
    role: {
      pt: 'Portfólio DevSpace',
      en: 'DevSpace Portfolio',
    },
    organization: 'Projeto pessoal',
    period: {
      pt: '2025 — atual',
      en: '2025 — present',
    },
    description: {
      pt: 'Site pessoal em React e TypeScript, com conteúdo bilíngue, tema configurável por design tokens e publicação automatizada no GitHub Pages a cada push.',
      en: 'Personal site built with React and TypeScript, featuring bilingual content, a token-driven theme and automated publishing to GitHub Pages on every push.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Actions'],
    startYear: 2025,
  },
  {
    id: 'medcare-exp',
    kind: 'work',
    role: {
      pt: 'MedCare — aplicação full stack',
      en: 'MedCare — full stack application',
    },
    organization: 'Projeto acadêmico',
    period: {
      pt: '2025',
      en: '2025',
    },
    description: {
      pt: 'Sistema de gestão de consultas: modelagem do banco em MySQL, API REST em Node.js com Express e interface em React consumindo essa API.',
      en: 'Appointment management system: MySQL database modelling, a REST API in Node.js with Express and a React interface consuming that API.',
    },
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
    startYear: 2025,
  },
];

/** Mais recente primeiro. */
export const sortedTimeline = [...timeline].sort((a, b) => b.startYear - a.startYear);
