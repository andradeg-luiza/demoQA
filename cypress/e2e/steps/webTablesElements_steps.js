import WebTablesElementsPage from "../pages/webTablesElements_pages";
const webTablesElementsPage = new WebTablesElementsPage();

Given(/^I access the website "([^"]*)"$/, (url) => {
  webTablesElementsPage.navigateToUrl(url);
});

When(/^I create a new record with valid data$/, () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const age = '28';
  const email = 'john.doe@test.com';
  const salary = '50000';
  const department = 'Engineering';
  webTablesElementsPage.createNewRecord(firstName, lastName, age, email, salary, department);
});

Then(/^I should see the new record in the table$/, () => {
  webTablesElementsPage.verifyNewRecordInTable('John', 'Doe', 'john.doe@test.com');
});

When(/^I edit the newly created record$/, () => {
  webTablesElementsPage.editRecord(1, 'John', 'Doe', '30', 'john.doe@newemail.com', '55000', 'Engineering');
});

Then(/^I should see the updated record in the table$/, () => {
  webTablesElementsPage.verifyUpdatedRecordInTable('John', 'Doe', 'john.doe@newemail.com');
});

When(/^I delete the newly created record$/, () => {
  webTablesElementsPage.deleteRecord(1);
});

Then(/^the record should no longer be visible in the table$/, () => {
  webTablesElementsPage.verifyRecordNotInTable('John', 'Doe');
});

When(/^I create the following records dynamically:$/, (dataTable) => {
  const records = dataTable.rawTable.slice(1).map(row => ({
    firstName: row[0],
    lastName: row[1],
    age: row[2],
    email: row[3],
    salary: row[4],
    department: row[5],
  }));
  webTablesElementsPage.createMultipleRecords(records);
});

Then(/^I should see all the new records in the table$/, (dataTable) => {
  const records = dataTable.rawTable.slice(1).map(row => ({
    firstName: row[0],
    lastName: row[1],
    email: row[3],
  }));
  webTablesElementsPage.verifyAllRecordsInTable(records);
});

When(/^I delete all the newly created records$/, () => {
  webTablesElementsPage.deleteAllRecords();
});

Then(/^none of the new records should remain in the table$/, () => {
  webTablesElementsPage.verifyRecordNotInTable('John', 'Doe');
  webTablesElementsPage.verifyRecordNotInTable('Jane', 'Smith');
});
