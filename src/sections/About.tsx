import { profile } from '../content/profile';
import { skillGroups } from '../content/skills';
import { useLanguage } from '../i18n/useLanguage';
import { useReveal } from '../hooks/useReveal';

export function About() {
  const { t, localized } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" aria-labelledby="about-title" className="border-b-rule border-divider">
      {/* O mockup mostra as duas línguas lado a lado; aqui a coluna da direita
          traz a biografia no idioma escolhido, já que o site tem o seletor
          PT/EN e repetir o texto traduzido seria redundante. */}
      <div ref={ref} className="grid border-b-rule border-divider lg:grid-cols-2">
        <div className="border-b border-divider px-6 py-11 sm:px-9 lg:border-b-0 lg:border-r-rule">
          <p className="mb-3.5 text-[13px] uppercase tracking-[0.08em] text-accent-700">
            {t('about.kicker')}
          </p>
          <h2 id="about-title" className="max-w-[16ch] text-[32px] tracking-[-0.02em] sm:text-[36px]">
            {localized(profile.aboutTitle)}
          </h2>
        </div>

        <div className="px-6 py-11 sm:px-9">
          <p className="text-[15px] leading-[1.6] text-body">{localized(profile.bio)}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            className={`border-divider px-6 py-[22px] ${
              // A última célula de cada linha não leva régua à direita; em
              // telas estreitas a separação passa a ser horizontal.
              index < skillGroups.length - 1 ? 'border-b sm:border-b-0 lg:border-r' : ''
            } ${index % 2 === 0 ? 'sm:border-r lg:border-r' : ''} ${
              index < 2 ? 'sm:border-b lg:border-b-0' : ''
            }`}
          >
            <h3 className="mb-2.5 text-[13px] uppercase tracking-[0.08em]">
              {localized(group.label)}
            </h3>
            <ul className="text-[14px] leading-[1.9]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
