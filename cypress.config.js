const { defineConfig } = require("cypress");


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
  },
});
