const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://demoqa.com',
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber())
		},
		specPattern: 'cypress/e2e/Features/*.feature',
		experimentalSessionAndOrigin: true, // Adicionado para preservar cookies e dados da sessão
		testIsolation: false,
	},
})
