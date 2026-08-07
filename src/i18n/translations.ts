import type { Locale } from '../content/types';

/**
 * Textos de interface (rótulos, títulos de seção, botões).
 *
 * Conteúdo pessoal — projetos, bio, trajetória — não mora aqui: fica em
 * `src/content/`, já no formato `{ pt, en }`.
 *
 * O tipo `TranslationKey` é derivado do dicionário PT, então esquecer de
 * traduzir uma chave para o inglês vira erro de compilação, não um buraco
 * silencioso na interface.
 */
const pt = {
  'nav.home': 'Início',
  'nav.projects': 'Projetos',
  'nav.about': 'Sobre',
  'nav.journey': 'Trajetória',
  'nav.contact': 'Contato',
  'nav.label': 'Navegação principal',
  'nav.openMenu': 'Abrir menu de navegação',
  'nav.closeMenu': 'Fechar menu de navegação',
  'nav.skipToContent': 'Pular para o conteúdo',

  'lang.label': 'Idioma',
  'lang.pt': 'PT',
  'lang.en': 'EN',
  'lang.switchTo': 'Switch to English',

  'hero.ctaProjects': 'Ver os {count} projetos',
  'hero.ctaProjectsShort': 'Ver projetos',
  'hero.photoAlt': 'Retrato de Francisco Hauch',

  'stats.projects': 'Projetos publicados',
  'stats.fullstackValue': 'Full stack',
  'stats.fullstack': 'Front-end + API + banco',
  'stats.bilingual': 'Conteúdo bilíngue',

  'projects.title': 'Projetos',
  'projects.subtitle':
    'Cada projeto com uma descrição própria do que ele resolve e de como foi construído.',
  'projects.filterLabel': 'Filtrar por tecnologia',
  'projects.all': 'Todos',
  'projects.featured': 'Destaque',
  'projects.repo': 'Repositório',
  'projects.demo': 'Demo',
  'projects.unpublished': 'Repositório ainda não publicado',
  'projects.nextKicker': 'Em andamento',
  'projects.nextTitle': 'O próximo projeto entra aqui.',
  'projects.nextBody':
    'Cada card é gerado a partir de um objeto no arquivo de conteúdo — adicionar um projeto é adicionar um item.',
  'projects.selected': 'Projetos selecionados',

  'about.kicker': 'Sobre',
  'about.title': 'Sobre',

  'journey.title': 'Trajetória',
  'journey.subtitle': 'Formação e os projetos que marcaram cada etapa.',
  'journey.work': 'Projeto',
  'journey.education': 'Formação',

  'contact.kicker': 'Contato',
  'contact.title': 'Aberto a vagas e projetos.',
  'contact.body': 'Respondo em até dois dias úteis. Prefere e-mail direto?',
  'contact.linksLabel': 'Links',
  'contact.formName': 'Nome',
  'contact.formNamePlaceholder': 'Como devo te chamar',
  'contact.formEmail': 'E-mail',
  'contact.formEmailPlaceholder': 'voce@empresa.com',
  'contact.formMessage': 'Mensagem',
  'contact.formMessagePlaceholder': 'Sobre o que quer conversar?',
  'contact.formSubmit': 'Enviar mensagem',
  'contact.formHint':
    'O botão abre seu programa de e-mail com a mensagem já preenchida.',
  'contact.formSubject': 'Contato pelo portfólio',

  'footer.builtWith': 'Feito com React, TypeScript e Vite.',
  'footer.sourceCode': 'Código-fonte',
  'footer.backToTop': 'Voltar ao topo',
} as const;

export type TranslationKey = keyof typeof pt;

const en: Record<TranslationKey, string> = {
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.journey': 'Journey',
  'nav.contact': 'Contact',
  'nav.label': 'Main navigation',
  'nav.openMenu': 'Open navigation menu',
  'nav.closeMenu': 'Close navigation menu',
  'nav.skipToContent': 'Skip to content',

  'lang.label': 'Language',
  'lang.pt': 'PT',
  'lang.en': 'EN',
  'lang.switchTo': 'Mudar para português',

  'hero.ctaProjects': 'View all {count} projects',
  'hero.ctaProjectsShort': 'View projects',
  'hero.photoAlt': 'Portrait of Francisco Hauch',

  'stats.projects': 'Published projects',
  'stats.fullstackValue': 'Full stack',
  'stats.fullstack': 'Front-end + API + database',
  'stats.bilingual': 'Bilingual content',

  'projects.title': 'Projects',
  'projects.subtitle':
    'Each project with its own description of what it solves and how it was built.',
  'projects.filterLabel': 'Filter by technology',
  'projects.all': 'All',
  'projects.featured': 'Featured',
  'projects.repo': 'Repository',
  'projects.demo': 'Demo',
  'projects.unpublished': 'Repository not published yet',
  'projects.nextKicker': 'In progress',
  'projects.nextTitle': 'The next project goes here.',
  'projects.nextBody':
    'Every card is generated from an object in the content file — adding a project means adding an item.',
  'projects.selected': 'Selected projects',

  'about.kicker': 'About',
  'about.title': 'About',

  'journey.title': 'Journey',
  'journey.subtitle': 'Education and the projects that shaped each step.',
  'journey.work': 'Project',
  'journey.education': 'Education',

  'contact.kicker': 'Contact',
  'contact.title': 'Open to roles and projects.',
  'contact.body': 'I reply within two business days. Prefer direct email?',
  'contact.linksLabel': 'Links',
  'contact.formName': 'Name',
  'contact.formNamePlaceholder': 'What should I call you',
  'contact.formEmail': 'Email',
  'contact.formEmailPlaceholder': 'you@company.com',
  'contact.formMessage': 'Message',
  'contact.formMessagePlaceholder': 'What would you like to talk about?',
  'contact.formSubmit': 'Send message',
  'contact.formHint': 'The button opens your email client with the message prefilled.',
  'contact.formSubject': 'Contact from the portfolio',

  'footer.builtWith': 'Built with React, TypeScript and Vite.',
  'footer.sourceCode': 'Source code',
  'footer.backToTop': 'Back to top',
};

export const translations: Record<Locale, Record<TranslationKey, string>> = { pt, en };
