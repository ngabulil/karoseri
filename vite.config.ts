import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from "@svgr/rollup";

const viteConfig = defineViteConfig({
  plugins: [react(), svgr()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

export default mergeConfig(viteConfig, vitestConfig);