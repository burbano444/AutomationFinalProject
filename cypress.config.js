const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ke1evd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io/"
  },
});
