import WebTablesElements from "../pages/webTablesElements_pages"
const webTablesElements = new WebTablesElements

Given(/^I access the website "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I create a new record with valid data$/, () => {
	return true;
});

Then(/^I should see the new record in the table$/, () => {
	return true;
});

When(/^I edit the newly created record$/, () => {
	return true;
});

Then(/^I should see the updated record in the table$/, () => {
	return true;
});

When(/^I delete the newly created record$/, () => {
	return true;
});

Then(/^the record should no longer be visible in the table$/, () => {
	return true;
});

When(/^I create the following records dynamically:$/, () => {
	return true;
});

Then(/^I should see all the new records in the table$/, () => {
	return true;
});

When(/^I delete all the newly created records$/, () => {
	return true;
});

Then(/^none of the new records should remain in the table$/, () => {
	return true;
});