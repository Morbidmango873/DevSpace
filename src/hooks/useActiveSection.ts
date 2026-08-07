import { useEffect, useState } from 'react';

/**
 * Devolve o id da seção que está sendo lida no momento, para destacar o item
 * correspondente no menu.
 *
 * A `rootMargin` recorta a viewport numa faixa estreita logo abaixo do
 * cabeçalho (dos 25% aos 40% da altura). Uma seção conta como ativa quando
 * cruza essa faixa — o que evita o efeito de duas seções disputarem o destaque
 * quando as duas estão parcialmente visíveis.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  // `sectionIds` é um array literal: comparar pelo conteúdo evita recriar o
  // observer a cada render.
  const key = sectionIds.join(',');

  useEffect(() => {
    const ids = key.split(',');
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        // Empate resolvido pela ordem do documento, e não pela ordem em que o
        // observer entregou as entradas — que não é garantida.
        const firstVisible = ids.find((id) => visible.has(id)) ?? null;
        if (firstVisible) setActiveId(firstVisible);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
