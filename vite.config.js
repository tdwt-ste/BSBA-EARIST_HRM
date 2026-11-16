import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/BSBA-EARIST_HRM/',
  server: {
    port: 5173,
    open: true,
  },
})
