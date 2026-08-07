import type { SkillGroup } from './types';

/**
 * Stack exibida na régua de quatro colunas da seção "Sobre".
 *
 * Quatro grupos porque a grade do design tem quatro células; acrescentar um
 * quinto quebra o alinhamento com a régua acima.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: { pt: 'Front-end', en: 'Front-end' },
    items: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    id: 'backend',
    label: { pt: 'Back-end', en: 'Back-end' },
    items: ['Node.js', 'Express', 'APIs REST'],
  },
  {
    id: 'data',
    label: { pt: 'Dados', en: 'Data' },
    items: ['MySQL', 'Python'],
  },
  {
    id: 'tools',
    label: { pt: 'Ferramentas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Vite'],
  },
];
