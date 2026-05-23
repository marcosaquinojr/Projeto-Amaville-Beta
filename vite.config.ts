import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

const isVercel = !!(process.env.VERCEL || process.env.NOW_BUILDER);

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    !isVercel && cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      target: isVercel ? "vercel" : "cloudflare-module",
      ...(isVercel ? {} : { server: { entry: "./src/server.ts" } }),
    }),
    viteReact(),
  ].filter(Boolean),
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
    ],
  },
});
