import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "@svgr/rollup";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), VitePWA({
    includeAssets: ['favicon.svg', 'robots.txt', 'manifest.json', 'apple-touch-icon.png'],
    manifest: {
      // Konfigurasi manifest.json Anda
      // ...
    },
    workbox: {
      // Konfigurasi workbox Anda
      // ...
    }
  })],
})
