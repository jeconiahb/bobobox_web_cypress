const { defineConfig } = require('cypress');

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
        baseUrl: 'https://boboboxservice.com/',
    },
});
