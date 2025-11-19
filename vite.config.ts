import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: 
  // 1. If your repo is 'my-project', change this to '/my-project/'.
  // 2. If you are using a custom domain or user page (username.github.io), change this to '/'.
  base: '/',
  define: {
    // This empty object prevents the app from crashing when accessing process.env in the browser
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});