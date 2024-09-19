import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/documents': 'http://localhost:3000/',
    }
  },
  plugins: [react()],
})
