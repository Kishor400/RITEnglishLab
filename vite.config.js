import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/write-json': 'http://localhost:3001', // Adjust the port if your server is running on a different port
    },
  },
})
