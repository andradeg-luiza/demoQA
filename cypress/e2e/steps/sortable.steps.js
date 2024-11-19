import SortablePage from "../pages/sortable_pages";
const sortablePage = new SortablePage();

Given(/^I access the website "([^"]*)"$/, (url) => {
  sortablePage.navigateToUrl(url);
});

When(/^I drag and drop the elements to arrange them in ascending order$/, () => {
  sortablePage.dragAndDropItems();
});

Then(/^the list should display the numbers in the correct order: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (item1, item2, item3, item4, item5, item6) => {
  sortablePage.verifyListOrder();
});
