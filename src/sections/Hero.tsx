import fotoPerfil from '../assets/perfil.jpg';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { useLanguage } from '../i18n/useLanguage';
import { useReveal } from '../hooks/useReveal';

/** Uma célula da régua de estatísticas. */
function Stat({ value, label, className = '' }: { value: string; label: string; className?: string }) {
  return (
    <div className={`px-6 py-[18px] ${className}`}>
      <div className="text-[34px] font-extrabold leading-none tracking-[-0.02em]">{value}</div>
      <div className="mt-1.5 text-[11px] uppercase tracking-[0.08em] text-faint">{label}</div>
    </div>
  );
}

export function Hero() {
  const { t, localized } = useLanguage();
  const textRef = useReveal<HTMLDivElement>();

  // A contagem sai da lista de projetos: publicar um projeto novo atualiza o
  // número do botão e da estatística sozinho.
  const projectCount = String(projects.length).padStart(2, '0');

  return (
    <section id="home" aria-labelledby="home-title">
      <div className="grid border-b-rule border-divider lg:grid-cols-[1fr_380px]">
        <div ref={textRef} className="px-6 py-12 sm:px-9 lg:py-[52px]">
          <p className="mb-[18px] text-[11px] uppercase tracking-[0.14em] text-accent-700">
            {localized(profile.role)}
          </p>

          <h1
            id="home-title"
            className="mb-[22px] text-[44px] leading-[0.98] tracking-[-0.03em] sm:text-[54px] lg:text-[62px] lg:leading-none"
          >
            {/* A manchete curta só existe para a coluna estreita do celular,
                onde a longa quebraria em cinco linhas. */}
            <span className="lg:hidden">{localized(profile.headlineShort)}</span>
            <span className="hidden lg:inline">{localized(profile.headline)}</span>
          </h1>

          <p className="mb-2.5 max-w-[44ch] text-[16px] leading-[1.55]">
            {localized(profile.tagline)}
          </p>

          <a
            href="#projects"
            // Rótulo alinhado à esquerda, como manda o sistema: o botão nunca
            // centraliza o próprio texto.
            className="mt-6 inline-flex items-center justify-start bg-accent px-5 py-[11px] font-heading text-[14px] font-extrabold text-bg transition-colors hover:bg-accent-600"
          >
            <span className="lg:hidden">{t('hero.ctaProjectsShort')}</span>
            <span className="hidden lg:inline">
              {t('hero.ctaProjects', { count: projectCount })}
            </span>
          </a>
        </div>

        <div className="photo-bw border-t-rule border-divider bg-surface lg:border-l-rule lg:border-t-0">
          <img
            src={fotoPerfil}
            alt={t('hero.photoAlt')}
            /* width/height explícitos reservam o espaço antes de a imagem
               baixar, evitando o solavanco de layout no primeiro carregamento. */
            width={380}
            height={420}
            className="h-[200px] w-full object-cover lg:h-full"
          />
        </div>
      </div>

      <div className="grid border-b-rule border-divider sm:grid-cols-3">
        <Stat
          value={projectCount}
          label={t('stats.projects')}
          className="border-b border-divider sm:border-b-0 sm:border-r"
        />
        <Stat
          value={t('stats.fullstackValue')}
          label={t('stats.fullstack')}
          className="border-b border-divider sm:border-b-0 sm:border-r"
        />
        <Stat value="PT / EN" label={t('stats.bilingual')} />
      </div>
    </section>
  );
}
