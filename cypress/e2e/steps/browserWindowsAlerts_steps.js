import BrowserWindowsAlerts from "../pages/browserWindowsAlerts_pages"
const browserWindowsAlerts = new BrowserWindowsAlerts

Given(/^I access the website "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I click the "([^"]*)" button$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^a new browser window should open$/, () => {
	return true;
});

Then(/^the new window should display the message "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I close the newly opened window$/, () => {
	return true;
});

Then(/^I should return to the original window$/, () => {
	return true;
});
