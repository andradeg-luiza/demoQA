import Sortable from "../pages/sortable_pages"
const sortable = new Sortable


Given(/^I access the website "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I drag and drop the elements to arrange them in ascending order$/, () => {
	return true;
});

Then(/^the list should display the numbers in the correct order: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (args1,args2,args3,args4,args5,args6) => {
	console.log(args1,args2,args3,args4,args5,args6);
	return true;
});
