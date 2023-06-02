import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/https://github.com/abi26anamo/Personal_Website/",
  plugins: [react()],
  server: {
    port: 8001,
  },
})