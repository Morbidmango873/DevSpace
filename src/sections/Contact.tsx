import { useId, useState, type FormEvent } from 'react';
import { profile, socialLinks } from '../content/profile';
import { useLanguage } from '../i18n/useLanguage';
import { useReveal } from '../hooks/useReveal';
import { ArrowDownIcon, ArrowUpRightIcon } from '../components/Icons';

export function Contact() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  // `useId` evita ids colididos caso a seção seja reaproveitada na página.
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  /**
   * O site é estático — não há servidor para receber um POST. Em vez de um
   * formulário que finge enviar e perde a mensagem, o botão monta um `mailto:`
   * com tudo preenchido e entrega ao programa de e-mail do visitante.
   *
   * Para receber direto no site depois, basta trocar este handler por um POST
   * a um serviço de formulários.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${t('contact.formSubject')} — ${form.name}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    'w-full min-h-9 border border-divider bg-bg px-2.5 py-1.5 text-[14px] caret-accent transition-colors hover:border-text/45 focus-visible:border-accent';

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div ref={ref} className="grid lg:grid-cols-[1fr_420px]">
        <div className="border-b border-divider px-6 py-11 sm:px-9 lg:border-b-0 lg:border-r-rule">
          <p className="mb-3.5 text-[13px] uppercase tracking-[0.08em] text-accent-700">
            {t('contact.kicker')}
          </p>

          <h2 id="contact-title" className="mb-3.5 max-w-[16ch] text-[36px] tracking-[-0.03em] sm:text-[44px]">
            {t('contact.title')}
          </h2>

          <p className="mb-6 max-w-[46ch] text-[15px] text-body">
            {t('contact.body')}{' '}
            <a href={`mailto:${profile.email}`} className="text-accent-700 underline">
              {profile.email}
            </a>
          </p>

          <ul aria-label={t('contact.linksLabel')} className="max-w-[420px] border-t border-divider">
            {socialLinks.map((link) => (
              <li key={link.id} className="border-b border-divider">
                <a
                  href={link.href}
                  {...(link.kind === 'external'
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : { download: '' })}
                  className="flex items-center justify-between py-3.5 text-[14px] uppercase tracking-[0.04em] transition-colors hover:text-accent"
                >
                  <span>{link.label}</span>
                  <span className="text-accent">
                    {link.kind === 'download' ? (
                      <ArrowDownIcon size={16} />
                    ) : (
                      <ArrowUpRightIcon size={16} />
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-surface px-6 py-11 sm:px-8">
          <div>
            <label htmlFor={nameId} className="mb-1.5 block text-[12px] text-body">
              {t('contact.formName')}
            </label>
            <input
              id={nameId}
              type="text"
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder={t('contact.formNamePlaceholder')}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor={emailId} className="mb-1.5 block text-[12px] text-body">
              {t('contact.formEmail')}
            </label>
            <input
              id={emailId}
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder={t('contact.formEmailPlaceholder')}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor={messageId} className="mb-1.5 block text-[12px] text-body">
              {t('contact.formMessage')}
            </label>
            <textarea
              id={messageId}
              required
              rows={4}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder={t('contact.formMessagePlaceholder')}
              className={`${fieldClass} min-h-[90px] resize-y`}
            />
          </div>

          <button
            type="submit"
            // Rótulo à esquerda mesmo o botão ocupando a linha inteira — é a
            // regra do sistema para botões largos.
            className="mt-2 w-full bg-accent px-[18px] py-3 text-left font-heading text-[14px] font-extrabold text-bg transition-colors hover:bg-accent-600"
          >
            {t('contact.formSubmit')}
          </button>

          <p className="text-[12px] text-faint">{t('contact.formHint')}</p>
        </form>
      </div>
    </section>
  );
}
