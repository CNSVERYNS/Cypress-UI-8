const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  defaultCommandTimeout: 1 * 1000,
  viewportHeight: 1080,
  viewportWidth: 1980,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    SITE_URL: process.env.UI_URL
  },
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
  },
})
