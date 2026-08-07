import { useEffect, useState } from 'react';
import { profile } from '../content/profile';
import { useLanguage } from '../i18n/useLanguage';
import type { TranslationKey } from '../i18n/translations';
import { useActiveSection } from '../hooks/useActiveSection';
import { LanguageToggle } from './LanguageToggle';
import { MenuIcon, XIcon } from './Icons';

const NAV_ITEMS: { id: string; key: TranslationKey }[] = [
  { id: 'home', key: 'nav.home' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'about', key: 'nav.about' },
  { id: 'journey', key: 'nav.journey' },
  { id: 'contact', key: 'nav.contact' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/** "01", "02", … — a numeração da navegação vem da posição, não de dados. */
const order = (index: number) => String(index + 1).padStart(2, '0');

/**
 * Navegação do site em duas formas:
 * - a partir de `lg`, a régua lateral fixa de 200px do design;
 * - abaixo disso, uma barra no topo com menu retrátil.
 *
 * As duas listas saem do mesmo `NAV_ITEMS`, então não há como uma ficar
 * desatualizada em relação à outra.
 */
export function Nav() {
  const { t, localized } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  // Esc fecha o menu: quem abriu pelo teclado precisa conseguir sair por ele.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const itemClass = (id: string) =>
    activeSection === id ? 'text-accent' : 'text-text hover:text-accent';

  return (
    <>
      {/* ── Régua lateral (desktop) ─────────────────────────────────────── */}
      <div className="fixed inset-y-0 left-0 z-40 hidden w-[200px] flex-col gap-7 border-r-rule border-divider bg-bg px-5 py-7 lg:flex">
        <a href="#home" className="text-[15px] font-extrabold leading-[1.1]">
          FRANCISCO
          <br />
          HAUCH
        </a>

        <nav aria-label={t('nav.label')}>
          <ul className="flex flex-col gap-3 text-[13px] uppercase tracking-[0.06em]">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                  className={`transition-colors ${itemClass(item.id)}`}
                >
                  {order(index)} {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* `mt-auto` cola o rodapé da régua na base sem depender de altura fixa. */}
        <div className="mt-auto flex flex-col gap-1.5 text-[11px] text-faint">
          <LanguageToggle />
          <span className="mt-1.5">{localized(profile.location)}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>

      {/* ── Barra superior (mobile e tablet) ────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-40 border-b-rule border-divider bg-bg lg:hidden">
        <div className="flex items-center gap-4 px-5 py-3.5">
          <a href="#home" className="text-[14px] font-extrabold">
            FRANCISCO HAUCH
          </a>

          <div className="ml-auto flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className="transition-colors hover:text-accent"
            >
              {isMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          // Fundo opaco: a barra fica sobre o conteúdo, e sem isto o texto da
          // seção atrás vaza por entre os itens do menu aberto.
          <nav
            id="mobile-menu"
            aria-label={t('nav.label')}
            className="border-t border-divider bg-bg"
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.id} className="border-b border-divider last:border-b-0">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={`block px-5 py-3.5 text-[13px] uppercase tracking-[0.06em] transition-colors ${itemClass(
                      item.id,
                    )}`}
                  >
                    {order(index)} {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
