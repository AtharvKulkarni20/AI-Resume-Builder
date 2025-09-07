import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // allows external access and proper HMR
    port: 5173, // dev server port
    strictPort: true, // fail if port is in use
    hmr: {
      protocol: "ws", // use WebSocket for HMR
      host: "localhost",
      port: 5173,
    },
  },
});
