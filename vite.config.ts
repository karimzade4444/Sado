import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import observerPlugin from "mobx-react-observer/vite-plugin";
import path from 'path/win32';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    observerPlugin(
      // optional
      { exclude: ["src/ui-components/**"] },
    ),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
});
