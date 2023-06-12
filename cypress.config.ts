import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    retries: {
      runMode: 3,
    },
    video: false,
    screenshotOnRunFailure: true,
    supportFile: "./cypress/support/e2e.ts",
  },
});
