const defineConfig = require('cypress').defineConfig;
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/report",
      overwrite: true,
      html: true,
      json: true,
    },
    baseUrl: "https://demo.realworld.how",
    setupNodeEvents(on, config) {
      config.env = process.env;
      return config;
    }
  },
});