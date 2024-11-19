import FormsPractice from "../pages/formsPractice_pages"
const formsPractice = new FormsPractice

Given(/^I access the website "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I fill in the form with random valid data$/, () => {
	return true;
});

When(/^I upload a "([^"]*)" file from the project's designated folder$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I click the "([^"]*)" button$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I should see a popup confirming the form submission$/, () => {
	return true;
});

Then(/^I close the popup$/, () => {
	return true;
});
