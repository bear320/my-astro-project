// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'zh-TW',
    fallback: {
      en: 'zh-TW',
    },
    routing: {
      fallbackType: 'rewrite',
    },
  },
  integrations: [react(), icon()],
});
