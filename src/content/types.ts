/**
 * Tipos compartilhados da camada de conteúdo.
 *
 * Toda a apresentação (componentes) consome estes tipos, nunca dados soltos.
 * Trocar o visual do site não deve exigir tocar em nenhum arquivo de `content/`.
 */

/** Idiomas suportados pelo site. */
export type Locale = 'pt' | 'en';

/** Um texto que existe nos dois idiomas. */
export type Localized = Record<Locale, string>;

export interface Project {
  id: string;
  title: string;
  description: Localized;
  /** Tecnologias exibidas como tags e usadas pelo filtro da seção. */
  stack: string[];
  /**
   * Repositório público. Omitir quando o projeto ainda não foi publicado — o
   * card deixa de mostrar o link em vez de apontar para um endereço inexistente.
   */
  repoUrl?: string;
  /** Demo ao vivo. Omitir quando não houver: o botão some sozinho. */
  demoUrl?: string;
  /** Destaca o projeto na listagem. */
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  label: Localized;
  items: string[];
}

export type TimelineKind = 'work' | 'education';

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  /** Cargo, ou nome do curso quando `kind` for `education`. */
  role: Localized;
  /** Empresa, instituição ou "Projeto pessoal". */
  organization: string;
  /** Rótulo livre do período, ex.: "2024 — atual". */
  period: Localized;
  description: Localized;
  /** Tecnologias/matérias relevantes do período. */
  stack?: string[];
  /** Mantém o item ordenado sem depender da ordem do array. */
  startYear: number;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  /** Seta mostrada à direita: externo abre fora, download baixa. */
  kind: 'external' | 'download';
}
