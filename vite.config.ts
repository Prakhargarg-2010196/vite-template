import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

import eslint from 'vite-plugin-eslint'

import tsconfig from 'vite-tsconfig-paths'

export default defineConfig({
  resolve: {
    alias: {
      '@/*': './src/*',
    },
  },
  plugins: [react(), eslint(), tsconfig()],
})
