import ProgressBarPage from "../pages/progressBar_pages";
const progressBarPage = new ProgressBarPage();

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Script error.') || err.message.includes('cross-origin')) {
        return false;
    }
});

Given(/^I access the website "([^"]*)"$/, (url) => {
    progressBarPage.navigateToUrl(url);
});

When(/^I click the "([^"]*)" button$/, (buttonText) => {
    if (buttonText === "Start") {
        progressBarPage.clickStartButton();
    } else if (buttonText === "Reset") {
        progressBarPage.clickResetButton();
    }
});

When(/^I stop the progress bar before it reaches 25%$/, () => {
    progressBarPage.stopProgressBefore25();
});

Then(/^the progress bar value should be less than or equal to 25%$/, () => {
    progressBarPage.verifyProgressBarLessThan25();
});

When(/^I let the progress bar reach 100%$/, () => {
    progressBarPage.letProgressBarReach100();
});

Then(/^the progress bar value should be 100%$/, () => {
    progressBarPage.verifyProgressBarEqual100();
});

When(/^I reset the progress bar$/, () => {
    progressBarPage.clickResetButton();
});

Then(/^the progress bar value should be reset to 0%$/, () => {
    progressBarPage.verifyProgressBarReset();
});
