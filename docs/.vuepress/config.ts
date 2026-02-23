import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({

    navbar: [{ text: 'Inicio', link: '/' }],
    sidebar: [
      {
        text: 'Documentación Técnica',
        children: [
          { text: 'Introducción', link: '/' },
          { text: 'Componentes', link: '/componentes.md' },
          { text: 'Arquitectura', link: '/arquitectura.md' },
        ],
      },
    ],
  }),
  lang: 'es-ES',
  title: 'VueDining Docs',
  description: 'Documentación del sistema de reservas para restaurantes',
})
