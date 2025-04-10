import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // sometimes i need this for my weird network setup
  // remove if causing issues
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
})
