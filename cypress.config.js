const { defineConfig } = require("cypress");
const fs = require("fs");

// Baca file cypress.env.json
const envConfig = JSON.parse(fs.readFileSync("cypress.env.json", "utf-8"));

// Ambil ENV dari command-line atau gunakan default (staging)
const selectedEnvName = process.env.npm_config_ENV || envConfig.ENV;
const selectedEnv = envConfig[selectedEnvName] || envConfig.staging;

module.exports = defineConfig({
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 20000,
    chromeWebSecurity: false,
    scrollBehavior: false,
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        baseUrl: selectedEnv.url, // Sesuaikan baseUrl dengan ENV yang dipilih
        env: selectedEnv
    },
});
