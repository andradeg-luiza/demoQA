import ProgressBar from "../pages/progressBar_pages"
const progressBar = new ProgressBar

Given(/^I access the website "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I click the "([^"]*)" button$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I stop the progress bar before it reaches 25%$/, () => {
	return true;
});

Then(/^the progress bar value should be less than or equal to 25%$/, () => {
	return true;
});

When(/^I let the progress bar reach 100%$/, () => {
	return true;
});

Then(/^the progress bar value should be 100%$/, () => {
	return true;
});

When(/^I reset the progress bar$/, () => {
	return true;
});

Then(/^the progress bar value should be reset to 0%$/, () => {
	return true;
});