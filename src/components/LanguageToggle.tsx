import type { Locale } from '../content/types';
import { useLanguage } from '../i18n/useLanguage';

const OPTIONS: Locale[] = ['pt', 'en'];

/**
 * Controle segmentado PT / EN — o padrão `.seg` do design system.
 *
 * São dois botões de verdade em vez de um botão que alterna, porque o estado
 * atual fica visível o tempo todo: dá para ver em que idioma o site está sem
 * precisar ler o conteúdo.
 */
export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t('lang.label')}
      className="inline-flex border border-divider"
    >
      {OPTIONS.map((option, index) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            // `aria-pressed` comunica qual dos dois está ativo — a cor sozinha
            // não chega ao leitor de tela.
            aria-pressed={isActive}
            className={`px-2.5 py-1 text-[11px] font-extrabold transition-colors ${
              index > 0 ? 'border-l border-divider' : ''
            } ${isActive ? 'bg-accent text-bg' : 'hover:bg-text/[0.07]'}`}
          >
            {t(option === 'pt' ? 'lang.pt' : 'lang.en')}
          </button>
        );
      })}
    </div>
  );
}
