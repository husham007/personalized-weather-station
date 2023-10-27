import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8081",
  },
  env: {
    BACKEND: "http://localhost:8080/api/auth",
  },
});
