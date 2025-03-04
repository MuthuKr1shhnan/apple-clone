import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "zero-gv",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
    rollupOptions: {
      external: ["/apple-clone/assets/videos/hero.mp4"], // Mark as external
    },
  },

  base: "/apple-clone",
});
