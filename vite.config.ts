import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // If this repository is named "<github-id>.github.io", keep base as "/".
  // For a project repository such as "infra-devops-portfolio", change it to:
  // base: "/infra-devops-portfolio/",
  base: '/',
});
