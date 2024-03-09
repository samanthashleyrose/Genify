import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SpotifyAuth } from "react-spotify-auth";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [SpotifyAuth],
    }
  },
  server: {
    port: 3027,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3028',
        changeOrigin: true,
        secure: false,
      }
    }
  },
});