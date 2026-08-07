import { createContext } from 'react';
import type { Locale, Localized } from '../content/types';
import type { TranslationKey } from './translations';

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Alterna entre os dois idiomas suportados. */
  toggleLocale: () => void;
  /**
   * Traduz uma chave de interface, substituindo marcadores `{nome}` pelos
   * valores passados — ex.: `t('hero.ctaProjects', { count: 5 })`.
   */
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
  /** Escolhe o idioma corrente de um conteúdo bilíngue vindo de `src/content/`. */
  localized: (value: Localized) => string;
}

/**
 * Fica `null` fora do provider — o hook `useLanguage` transforma isso num erro
 * explícito, em vez de devolver um contexto vazio que falharia mais adiante.
 */
export const LanguageContext = createContext<LanguageContextValue | null>(null);
