import react from '@vitejs/plugin-react';
// https://vite.dev/config/
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
});
