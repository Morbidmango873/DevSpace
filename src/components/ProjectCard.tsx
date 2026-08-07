import type { Project } from '../content/types';
import { useLanguage } from '../i18n/useLanguage';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRightIcon } from './Icons';
import { Tag } from './Tag';

interface ProjectCardProps {
  project: Project;
  /** "01", "02"… — a posição do projeto na lista completa. */
  order: string;
  /** Escalona a entrada dos cards para não aparecerem todos de uma vez. */
  revealDelayMs?: number;
}

function CardLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 uppercase tracking-[0.06em] text-accent-700 transition-colors hover:text-accent-600"
    >
      {children}
      <ArrowUpRightIcon size={13} />
    </a>
  );
}

export function ProjectCard({ project, order, revealDelayMs = 0 }: ProjectCardProps) {
  const { t, localized } = useLanguage();
  const cardRef = useReveal<HTMLElement>(revealDelayMs);

  return (
    <article
      ref={cardRef}
      className="flex min-h-[280px] flex-col gap-2.5 bg-bg p-6 transition-colors hover:bg-surface"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[12px] font-extrabold text-accent-700">{order}</span>
        {project.featured && <Tag variant="accent">{t('projects.featured')}</Tag>}
      </div>

      <h3 className="text-[25px]">{project.title}</h3>

      {/* `flex-1` empurra tags e links para a base, alinhando as réguas
          inferiores dos cards mesmo com descrições de alturas diferentes. */}
      <p className="flex-1 text-[14px] leading-[1.5] text-body">
        {localized(project.description)}
      </p>

      <ul className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3.5 border-t border-divider pt-2.5 text-[12px]">
        {project.repoUrl ? (
          <CardLink href={project.repoUrl}>{t('projects.repo')}</CardLink>
        ) : (
          // Sem repositório publicado o card diz isso em vez de oferecer um
          // link que levaria a um 404.
          <span className="uppercase tracking-[0.06em] text-faint">
            {t('projects.unpublished')}
          </span>
        )}

        {project.demoUrl && <CardLink href={project.demoUrl}>{t('projects.demo')}</CardLink>}
      </div>
    </article>
  );
}
