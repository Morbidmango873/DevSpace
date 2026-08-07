import { useLayoutEffect, useRef } from 'react';

/**
 * Revela o elemento com um fade + deslize quando ele entra na viewport.
 *
 * Três cuidados deliberados:
 * - o estado inicial é aplicado em `useLayoutEffect`, antes da pintura, para
 *   não haver um piscar do conteúdo já visível;
 * - quem ativou "reduzir movimento" no sistema nunca recebe o estado escondido;
 * - sem `IntersectionObserver` o elemento simplesmente permanece visível, em vez
 *   de sumir para sempre.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    element.dataset.reveal = 'hidden';
    if (delayMs > 0) element.style.transitionDelay = `${delayMs}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          element.dataset.reveal = 'shown';
          // Uma vez revelado, para de observar: a animação é de entrada, não
          // deve se repetir a cada rolagem.
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  return ref;
}
