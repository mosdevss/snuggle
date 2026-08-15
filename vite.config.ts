import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const BASE = isProd ? '/snuggle/' : '/'

  return defineConfig({
    base: BASE,
    resolve: { tsconfigPaths: true },
    plugins: [
      tanstackStart({
        router: { basepath: BASE },
        client: { base: BASE },
        prerender: { enabled: true, crawlLinks: true },
      }),
      viteReact(),
    ],
  })
})
