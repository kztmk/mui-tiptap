import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@emotion/react', '@mui/material/Tooltip'],
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: { plugins: ['@emotion/babel-plugin'] },
    }),
    tsconfigPaths(),
  ],
});
