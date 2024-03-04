import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "portfolio",
    rollupOptions: {
      input: ["src/main.jsx", "./index.html"],
    },
  },
});
