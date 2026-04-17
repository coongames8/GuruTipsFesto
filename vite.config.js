import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    entries: ['src/main.jsx'], // Specify your entry file
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@mui/icons-material > @mui/material/utils',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
  server: {
    watch: {
      usePolling: true, // For some systems
    },
  },
})