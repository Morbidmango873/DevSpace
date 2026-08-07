import type { ReactNode } from 'react';

export interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Ícones no traço do Lucide, que é o conjunto que o sistema Modernist adota.
 *
 * Todos compartilham a mesma viewBox e os mesmos atributos de traço, então só
 * o desenho interno varia — `createIcon` guarda essa repetição num lugar só.
 *
 * `aria-hidden` é o padrão porque estes ícones sempre acompanham um texto
 * visível; anunciá-los duplicaria a informação no leitor de tela.
 */
function createIcon(paths: ReactNode) {
  return function Icon({ className = '', size = 24 }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        {paths}
      </svg>
    );
  };
}

export const MenuIcon = createIcon(
  <>
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </>,
);

export const XIcon = createIcon(
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>,
);

/** Seta diagonal usada em links que saem do site. */
export const ArrowUpRightIcon = createIcon(
  <>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </>,
);

export const ArrowRightIcon = createIcon(
  <>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </>,
);

export const ArrowDownIcon = createIcon(
  <>
    <line x1="12" y1="4" x2="12" y2="20" />
    <polyline points="5 13 12 20 19 13" />
  </>,
);

export const ArrowUpIcon = createIcon(
  <>
    <line x1="12" y1="20" x2="12" y2="4" />
    <polyline points="5 11 12 4 19 11" />
  </>,
);
