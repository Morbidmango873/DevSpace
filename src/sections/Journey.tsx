import { sortedTimeline } from '../content/experience';
import type { TimelineEntry } from '../content/types';
import { useLanguage } from '../i18n/useLanguage';
import { useReveal } from '../hooks/useReveal';
import { Tag } from '../components/Tag';

function TimelineRow({ entry, index }: { entry: TimelineEntry; index: number }) {
  const { t, localized } = useLanguage();
  const ref = useReveal<HTMLLIElement>(index * 70);

  const kindLabel = entry.kind === 'education' ? t('journey.education') : t('journey.work');

  return (
    // Linhas separadas por régua de 1px e alinhadas à esquerda — o sistema
    // organiza pela grade, sem cartões nem sombras.
    <li ref={ref} className="grid gap-x-8 gap-y-3 border-t border-divider py-7 lg:grid-cols-[200px_1fr]">
      <div className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-[0.1em] text-accent-700">{kindLabel}</span>
        <span className="text-[13px] text-faint">{localized(entry.period)}</span>
      </div>

      <div>
        <h3 className="text-[20px]">{localized(entry.role)}</h3>
        <p className="mb-2 text-[13px] text-faint">{entry.organization}</p>
        <p className="max-w-[70ch] text-[14px] leading-[1.55] text-body">
          {localized(entry.description)}
        </p>

        {entry.stack && entry.stack.length > 0 && (
          <ul className="mt-3.5 flex flex-wrap gap-1.5">
            {entry.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export function Journey() {
  const { t } = useLanguage();
  const headingRef = useReveal<HTMLDivElement>();

  return (
    <section id="journey" aria-labelledby="journey-title" className="border-b-rule border-divider">
      <div className="px-6 py-11 sm:px-9">
        <div ref={headingRef} className="mb-8">
          <h2 id="journey-title" className="mb-2.5 text-[38px] tracking-[-0.03em] sm:text-[44px]">
            {t('journey.title')}
          </h2>
          <p className="max-w-[60ch] text-[16px] text-body">{t('journey.subtitle')}</p>
        </div>

        <ol className="border-b border-divider">
          {sortedTimeline.map((entry, index) => (
            <TimelineRow key={entry.id} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
