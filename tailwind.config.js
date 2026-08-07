/**
 * Os valores aqui apenas apontam para os design tokens definidos em
 * `src/index.css`, transcritos do sistema Modernist. Para retunar o visual,
 * edite as variáveis lá — este arquivo só dá nomes de utilitário a elas.
 *
 * `<alpha-value>` é o placeholder que faz modificadores de opacidade
 * (`bg-accent/10`) funcionarem em cima de uma variável CSS.
 */
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        text: token('text'),
        accent: {
          DEFAULT: token('accent'),
          100: token('accent-100'),
          600: token('accent-600'),
          // Passo obrigatório para texto em tamanho de parágrafo no acento:
          // o acento puro não atinge contraste de leitura sobre o fundo claro.
          700: token('accent-700'),
          800: token('accent-800'),
        },
        neutral: {
          100: token('neutral-100'),
          200: token('neutral-200'),
          300: token('neutral-300'),
          800: token('neutral-800'),
          900: token('neutral-900'),
        },
        /* A régua do sistema: tinta a 40%. Sem <alpha-value> porque a
           transparência já faz parte da definição do token. */
        divider: 'rgb(var(--color-text) / 0.4)',
        /* Texto secundário: a mesma tinta rebaixada, como o design usa. */
        faint: 'rgb(var(--color-text) / 0.55)',
        body: 'rgb(var(--color-text) / 0.72)',
      },
      borderColor: {
        DEFAULT: 'rgb(var(--color-text) / 0.4)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      borderRadius: {
        token: 'var(--radius)',
      },
      maxWidth: {
        content: '75rem',
      },
      borderWidth: {
        /* A régua forte que separa seções maiores. */
        rule: '2px',
      },
    },
  },
  plugins: [],
};
