const { defineConfig } = require("Cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 1000,
    specPattern: "cypress/e2e/feature/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    viewportWidth: 1200,
    viewportHeight: 800,
  },
});
