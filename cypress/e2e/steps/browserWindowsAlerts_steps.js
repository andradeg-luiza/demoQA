/// <reference types="Cypress" /> 

import BrowserWindowsAlertsPage from "../pages/browserWindowsAlerts_pages";
const browserWindowsAlertsPage = new BrowserWindowsAlertsPage();

Given(/^I access the website "([^"]*)"$/, (url) => {
    browserWindowsAlertsPage.accessWebsite(url);
});

When(/^I click the "([^"]*)"$/, (button) => {
    browserWindowsAlertsPage.clickNewWindowButton();
});

Then(/^the page should contain the message "([^"]*)"$/, (expectedMessage) => {
    cy.request('https://demoqa.com/sample').then((response) => {
        expect(response.body).to.include(expectedMessage);
    });
});
