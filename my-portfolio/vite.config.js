import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This tells Vite how to handle React and Tailwind CSS V4
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})