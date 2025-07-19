import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Stats/', // MUST match the repo name (case-sensitive!)
  plugins: [react()],
});
