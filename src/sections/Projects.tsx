import { useMemo, useState } from 'react';
import { projects, stackFilters } from '../content/projects';
import { useLanguage } from '../i18n/useLanguage';
import { useReveal } from '../hooks/useReveal';
import { ProjectCard } from '../components/ProjectCard';

const order = (index: number) => String(index + 1).padStart(2, '0');

export function Projects() {
  const { t } = useLanguage();
  const headingRef = useReveal<HTMLDivElement>();

  /** `null` significa "todos" — evita ter de repetir a string "Todos" no estado. */
  const [activeStack, setActiveStack] = useState<string | null>(null);

  const filters = useMemo(stackFilters, []);

  const visible = activeStack
    ? projects.filter((project) => project.stack.includes(activeStack))
    : projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-b-rule border-divider">
      <div ref={headingRef} className="px-6 pb-6 pt-11 sm:px-9">
        <h2 id="projects-title" className="mb-2.5 text-[38px] tracking-[-0.03em] sm:text-[52px]">
          {t('projects.title')}
        </h2>
        <p className="mb-[22px] max-w-[60ch] text-[16px] text-body">{t('projects.subtitle')}</p>

        <div role="group" aria-label={t('projects.filterLabel')} className="flex flex-wrap gap-2">
          {[{ label: t('projects.all'), value: null, count: projects.length }, ...filters.map((f) => ({ label: f.label, value: f.label, count: f.count }))].map(
            (filter) => {
              const isActive = activeStack === filter.value;

              return (
                <button
                  key={filter.label}
                  type="button"
                  onClick={() => setActiveStack(filter.value)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-1.5 text-[12px] transition-colors ${
                    isActive
                      ? 'border border-accent text-accent-700'
                      : 'border border-transparent bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                  }`}
                >
                  {filter.label} · {String(filter.count).padStart(2, '0')}
                </button>
              );
            },
          )}
        </div>
      </div>

      {/* O fundo da grade é a própria régua: as células são opacas e o vão de
          2px entre elas deixa o divisor aparecer. */}
      <div className="mx-6 mb-11 grid gap-[2px] border-rule border-divider bg-divider sm:grid-cols-2 lg:grid-cols-3 sm:mx-9">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            order={order(projects.indexOf(project))}
            // O atraso vem da posição na lista completa, não na filtrada: assim
            // filtrar não re-anima os cards que continuaram na tela.
            revealDelayMs={projects.indexOf(project) * 70}
          />
        ))}

        <div className="flex min-h-[280px] flex-col justify-end gap-2 bg-surface p-6">
          <div className="text-[11px] uppercase tracking-[0.1em] text-accent-700">
            {t('projects.nextKicker')}
          </div>
          <div className="text-[20px] font-extrabold leading-[1.15]">{t('projects.nextTitle')}</div>
          <p className="text-[13px] text-faint">{t('projects.nextBody')}</p>
        </div>
      </div>
    </section>
  );
}
