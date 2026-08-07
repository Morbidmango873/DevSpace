import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * O site é publicado como GitHub Pages de projeto, servido em
 * `https://<usuario>.github.io/DevSpace/` — e não na raiz do domínio. Sem o
 * `base` correto, todos os arquivos de assets seriam pedidos em `/assets/...`
 * e a página subiria em branco.
 *
 * Fica sobrescrevível por variável de ambiente para o dia em que houver um
 * domínio próprio: aí basta publicar com `VITE_BASE=/`.
 */
const base = process.env.VITE_BASE ?? '/DevSpace/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Sourcemaps facilitam depurar o site publicado e não são baixados por
    // quem só visita a página.
    sourcemap: true,
  },
});
