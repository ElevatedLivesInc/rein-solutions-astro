import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://reinsolutions.xyz',
  output: 'static',
  markdown: {
    syntaxHighlight: 'prism'
  }
});
