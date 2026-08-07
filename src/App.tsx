import { useEffect } from 'react';
import { profile } from './content/profile';
import { useLanguage } from './i18n/useLanguage';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Journey } from './sections/Journey';
import { Contact } from './sections/Contact';

export default function App() {
  const { t, localized } = useLanguage();
  const role = localized(profile.role);

  // Título e descrição acompanham o idioma escolhido — o seletor não pode
  // deixar a aba do navegador falando outra língua que o conteúdo.
  useEffect(() => {
    document.title = `${profile.name} — ${role}`;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', localized(profile.tagline));
  }, [role, localized]);

  return (
    <>
      {/* Primeiro elemento focável da página: permite pular a navegação inteira
          no teclado. Fica invisível até receber foco. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-heading focus:font-extrabold focus:text-bg"
      >
        {t('nav.skipToContent')}
      </a>

      <Nav />

      {/* A margem à esquerda abre espaço para a régua lateral fixa a partir de
          `lg`; abaixo disso o espaço vai para o topo, sob a barra do mobile. */}
      <main id="main" className="pt-[57px] lg:ml-[200px] lg:pt-0">
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Contact />
      </main>

      <div className="lg:ml-[200px]">
        <Footer />
      </div>
    </>
  );
}
