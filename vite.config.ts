import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let env = loadEnv(mode, process.cwd(), ["NODE_ENV", "PUBLIC_URL", "REACT"]);

  return {
    define: {
      "process.env": env,
    },
    build: {
      outDir: "build",
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
      },
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  };
});
