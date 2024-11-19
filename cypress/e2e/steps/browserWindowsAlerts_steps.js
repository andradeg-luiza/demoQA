import BrowserWindowsAlertsPage from "../pages/browserWindowsAlerts_pages";
const browserWindowsAlertsPage = new BrowserWindowsAlertsPage();

Given(/^I access the website "([^"]*)"$/, (url) => {
    browserWindowsAlertsPage.accessWebsite(url);
});

When(/^I click the "([^"]*)" button$/, (buttonText) => {
    browserWindowsAlertsPage.clickNewWindowButton();
});

Then(/^a new browser window should open$/, () => {
    browserWindowsAlertsPage.verifyNewWindow();
});

Then(/^the new window should display the message "([^"]*)"$/, (message) => {
    browserWindowsAlertsPage.verifyPopupMessage(message);
});

When(/^I close the newly opened window$/, () => {
    browserWindowsAlertsPage.closeNewWindow();
});

Then(/^I should return to the original window$/, () => {
    browserWindowsAlertsPage.returnToOriginalWindow();
});
