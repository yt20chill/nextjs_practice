import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src', 'app'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
