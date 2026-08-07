import type { Localized, SocialLink } from './types';

/**
 * Dados pessoais e links. Ponto único de edição — nenhum componente repete
 * e-mail, URL de perfil ou nome.
 */

export const profile = {
  name: 'Francisco Hauch',
  role: {
    pt: 'Desenvolvedor de software',
    en: 'Software developer',
  } satisfies Localized,
  /** A manchete grande do topo. */
  headline: {
    pt: 'Do banco de dados à interface.',
    en: 'From the database to the interface.',
  } satisfies Localized,
  /** Versão curta da manchete, usada na coluna estreita do mobile. */
  headlineShort: {
    pt: 'Aplicações web full stack.',
    en: 'Full stack web applications.',
  } satisfies Localized,
  tagline: {
    pt: 'Estudante de desenvolvimento de software com foco em aplicações web. Trabalho principalmente com React e Node.js.',
    en: 'Software development student focused on web applications. I work mainly with React and Node.js.',
  } satisfies Localized,
  /** Título da seção Sobre. */
  aboutTitle: {
    pt: 'Gosto de acompanhar a ideia inteira.',
    en: 'I like following the whole idea through.',
  } satisfies Localized,
  bio: {
    pt: 'Estudante de desenvolvimento de software com foco em aplicações web. Trabalho principalmente com React e Node.js, e gosto de projetos onde dá para acompanhar a ideia inteira: modelar os dados, escrever a API e entregar a interface.',
    en: 'Software development student focused on web applications. I work mainly with React and Node.js, and I enjoy projects where I can follow the whole idea through: model the data, write the API and ship the interface.',
  } satisfies Localized,
  email: 'fran.hauch@gmail.com',
  location: {
    pt: 'Brasil',
    en: 'Brazil',
  } satisfies Localized,
  siteUrl: 'https://morbidmango873.github.io/DevSpace/',
  githubUser: 'Morbidmango873',
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: `https://github.com/${profile.githubUser}`,
    kind: 'external',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/francisco-hauch-0412962b5/',
    kind: 'external',
  },
  // O mockup prevê uma terceira linha, "Currículo PDF". Está fora daqui porque
  // ainda não existe o arquivo — para ativá-la, coloque o PDF em `public/` e
  // acrescente:
  // { id: 'cv', label: 'Currículo PDF', href: 'curriculo.pdf', kind: 'download' },
];
