import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/WesPortfolio/" : "/",
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      includePublic: true,
      jpg: { quality: 1 },
      jpeg: { quality: 1 },
      png: { quality: 1 },
      webp: { quality: 1 },
    }),
  ],
}));
