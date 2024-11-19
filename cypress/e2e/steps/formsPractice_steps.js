import FormsPracticePage from "../pages/formsPractice_pages";
const formsPracticePage = new FormsPracticePage();

Given(/^I access the website "([^"]*)"$/, (url) => {
    formsPracticePage.accessWebsite(url);
});

When(/^I fill in the form with random valid data$/, () => {
    formsPracticePage.fillFormWithRandomData();
});

When(/^I upload a "([^"]*)" file from the project's designated folder$/, (fileName) => {
    formsPracticePage.uploadFile(fileName);
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
