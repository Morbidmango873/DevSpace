import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale, Localized } from '../content/types';
import { LanguageContext, type LanguageContextValue } from './context';
import { translations, type TranslationKey } from './translations';

const STORAGE_KEY = 'devspace:locale';
const SUPPORTED: Locale[] = ['pt', 'en'];

const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && SUPPORTED.includes(value as Locale);

/**
 * Idioma inicial: preferência salva > idioma do navegador > português.
 *
 * `localStorage` é lido dentro de um try/catch porque navegadores em modo
 * privado podem lançar ao acessá-lo — nesse caso caímos no padrão em vez de
 * quebrar a renderização.
 */
function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt';

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // Sem acesso a localStorage: segue para a detecção do navegador.
  }

  return window.navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    // Mantém o atributo lang do documento em dia: leitores de tela usam esse
    // valor para escolher a pronúncia correta.
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';

    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Preferência não persistida — a sessão atual continua funcionando.
    }
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === 'pt' ? 'en' : 'pt'));
  }, []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      const text = translations[locale][key];
      if (!vars) return text;

      // Um marcador sem valor correspondente é deixado como está, para o buraco
      // ficar visível na tela em vez de virar "undefined".
      return text.replace(/\{(\w+)\}/g, (match, name: string) =>
        name in vars ? String(vars[name]) : match,
      );
    },
    [locale],
  );

  const localized = useCallback((value: Localized) => value[locale], [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t, localized }),
    [locale, toggleLocale, t, localized],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
