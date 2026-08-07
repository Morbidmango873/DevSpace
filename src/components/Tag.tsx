interface TagProps {
  children: string;
  /**
   * `accent` para o rótulo de destaque, `outline` para o filtro ativo,
   * `neutral` para o resto. Mesmas variantes de `.tag` no design system.
   */
  variant?: 'neutral' | 'accent' | 'outline';
}

const VARIANTS: Record<NonNullable<TagProps['variant']>, string> = {
  neutral: 'bg-neutral-100 text-neutral-800',
  accent: 'bg-accent-100 text-accent-800',
  outline: 'border border-accent text-accent-700',
};

export function Tag({ children, variant = 'neutral' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-[3px] text-[11px] tracking-[0.02em] ${VARIANTS[variant]}`}
    >
      {children}
    </span>
  );
}
