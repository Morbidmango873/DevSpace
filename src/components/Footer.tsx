import { profile } from '../content/profile';
import { useLanguage } from '../i18n/useLanguage';
import { ArrowUpIcon } from './Icons';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-rule border-divider">
      <div className="flex flex-col gap-4 px-6 py-7 text-[12px] sm:flex-row sm:items-center sm:px-9">
        <p className="font-extrabold uppercase tracking-[0.04em]">
          © {year} {profile.name}
        </p>

        <p className="text-faint sm:ml-6">{t('footer.builtWith')}</p>

        <div className="flex items-center gap-6 sm:ml-auto">
          <a
            href={`https://github.com/${profile.githubUser}/DevSpace`}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[0.04em] transition-colors hover:text-accent"
          >
            {t('footer.sourceCode')}
          </a>

          <a
            href="#home"
            aria-label={t('footer.backToTop')}
            title={t('footer.backToTop')}
            className="border border-divider p-2 transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUpIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
