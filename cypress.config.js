const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://nexdom.tec.br", // opcional para front-end
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
