import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/christmas-tictactoe/',  // Set base to your GitHub repository name
  plugins: [react()]
});
