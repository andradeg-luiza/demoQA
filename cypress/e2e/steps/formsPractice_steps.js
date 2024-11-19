import FormsPracticePage from "../pages/formsPractice_pages";
const formsPracticePage = new FormsPracticePage();

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Script error.') || err.message.includes('cross-origin')) {
        return false;
    }
});

Given(/^I access the website "([^"]*)"$/, (url) => {
    formsPracticePage.accessWebsite(url);
});

When(/^I fill in the form with random valid data$/, () => {
    formsPracticePage.fillFormWithRandomData();
});

When(/^I upload a "([^"]*)" file from the project's designated folder$/, (fileName) => {
    formsPracticePage.uploadFile('testedemoqa.txt');
});

When(/^I click the "([^"]*)" button$/, (buttonText) => {
    formsPracticePage.clickSubmitButton();
});

Then(/^I should see a popup confirming the form submission$/, () => {
    formsPracticePage.verifyPopup();
});

Then(/^I close the popup$/, () => {
    formsPracticePage.closePopup();
});