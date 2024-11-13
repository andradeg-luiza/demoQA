import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { methods } from '../pageobjects/methods';
import { locators } from '../locators/locators';

Given('I am on the {string} website', (url) => {
  cy.visit(url);
});

When('I navigate to the {string} section', (section) => {
  methods.navigateToSection(section);
});

When('I select the {string} option', (option) => {
  methods.selectOption(option);
});

Then('I should see the Browser Windows page', () => {
    locators.browserWindowsPage.titleBrowserWindows().should('be.visible', { timeout: 10000 });
});

Given('I am on the Browser Windows page', () => {
    locators.browserWindowsPage.titleBrowserWindows().should('be.visible');
});

When('I click on the {string} button', (button) => {
    if (button === 'New Window') {
      methods.openNewWindow(locators.browserWindowsPage.newWindowButton, 'This is a sample page');
    } else if (button === 'New Tab') {
      methods.openNewWindow(locators.browserWindowsPage.newTabButton, 'This is a sample page');
    }
});

Then('a new window should open with a message that says {string}', (message) => {
    cy.window().then((win) => {
    cy.wrap(win.document.body).should('contain.text', message);
    });
});

And('I close the new window', () => {
  cy.window().then((win) => {
    win.close();
  });
});

//TODO deixar esse por último porque se trata de manipulação de outras janelas