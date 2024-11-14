import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { locators } from '../locators/locators';
import { methods } from '../pageObjects/methods';

Given('I am on the {string} website', (url) => {
  methods.navigateToUrl(url);
  locators.homePage.formsField().click();
});

When('I navigate to the {string} section', (section) => {
  if (section === 'Forms') {
    locators.leftList.formsMenu() // .click();
    cy.wait(500);
  }
});

And('I select the {string} option', (option) => {
  if (option === 'Practice Form') {
    locators.leftList.practiceFormOption()
      .should('be.visible')
      .click({ force: true })
      .then(() => {
        cy.wait(1000);
      });
  }
});

Then('I should see the Practice Form page', () => {
  locators.formsPracticeForm.title().should('be.visible');
});

Given('I am on the Practice Form page', () => {
  locators.formsPracticeForm.title().should('be.visible');
});

When('I fill out the form with random values', () => {
  const randomValues = {
    firstName: 'John',
    lastName: 'Doe',
    mobile: '1234567890',
    currentAddress: '123 Main St'
  };

  methods.fillPracticeForm(randomValues.firstName, randomValues.lastName, randomValues.mobile, randomValues.subject, randomValues.currentAddress);
});

And('I submit the form', () => {
  methods.submitPracticeForm();
});

Then('all fields should be populated', () => {
  locators.formsPracticeForm.nameField().should('have.value', 'John');
  locators.formsPracticeForm.lastNameField().should('have.value', 'Doe');
  locators.formsPracticeForm.mobileField().should('have.value', '1234567890');
  locators.formsPracticeForm.currentAddressField().should('have.value', '123 Main St');
});

And('the file should be attached to the form', () => {
  const filePath = 'TXTFORM.txt';

  cy.get('.form-control-file')
    .should('be.visible')
    .attachFile(filePath);

  cy.get('.form-control-file')
    .should('have.value', 'C:\\fakepath\\TXTFORM.txt');
});

And('I should see a popup confirming the form submission', () => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.include('Thanks for submitting the form');
  });
});

And('I close the popup', () => {
  cy.window().then((win) => {
    win.alert = () => {};
  });
});