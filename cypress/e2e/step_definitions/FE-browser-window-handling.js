import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { locators } from '../locators/locators'
import { methods } from '../pageObjects/methods'

Given('I am on the {string} website', (url) => {
    methods.navigateToUrl(url);
});
  
When('I navigate to the {string} section', () => {
    methods.navigateToSection(locators.leftList.alertsMenu);
});
  
And('I select the {string} option', () => {
    methods.navigateToSection(locators.leftList.browserWindowOption);
});
  
Then('I should see the Browser Windows page', () => {
    methods.waitForPageLoad(locators.browserWindowsAlerts.title);
});
  
Given('I am on the Browser Windows page', () => {
    methods.waitForPageLoad(locators.browserWindowsAlerts.title);
});
  
When('I click on the {string} button', () => {
    methods.openNewWindow(); //funciona até aqui
});
  
Then('a new window should open with a message that says “This is a sample page”', () => {
    methods.verifyNewWindowContent();
});
  
And('I close the new window', () => {
    methods.closeNewWindow(); 
});