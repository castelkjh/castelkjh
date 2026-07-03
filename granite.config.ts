import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "momchit",
  brand: {
    displayName: "멈칫",
    primaryColor: "#6C4EE3",
    icon: "https://static.toss.im/appsintoss/52673/631cbd43-2546-483c-85bb-23082c574bde.png",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite dev",
      build: "vite build",
    },
  },
  permissions: [],
  outdir: "dist",
});
