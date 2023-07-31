import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reporterOptions: {
      reportDir: 'cypress/report',
      overwrite: true,
      html: true,
      json: false,
      timestamp: 'ddmmyyyy_HHMMss'
    }
  }
});
