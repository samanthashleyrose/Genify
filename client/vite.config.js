import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the entry point JavaScript file
    entry: 'src/main.jsx',
  },
  server: {
    port: 3027,
    open: true,
  },
});