import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? "/modern-sea-creature-quiz/" : "./",
  plugins: [react()],
  build: {
    outDir: "standalone-ready",
    emptyOutDir: true,
    rollupOptions: { input: { index: "standalone-preview.html" } },
  },
});

