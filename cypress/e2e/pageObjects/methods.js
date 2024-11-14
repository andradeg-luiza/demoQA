import { locators } from '../locators/locators';

export const methods = {
  visitHomePage() {
    cy.visit('/');
  },

  navigateToSection(sectionLocator) {
    sectionLocator().click();
  },

  navigateToUrl(url) {
    cy.visit(url);
    locators.homePage.formsField().click();
  },

  openNewWindow() {
    locators.browserWindowsAlerts.newWindowButton().click();
  },

  verifyNewWindowContent() {
    cy.window().then(win => {
      cy.stub(win, 'open').callsFake((url) => {
        cy.visit(url).wait(500);
      });
    });
    cy.contains('This is a sample page').should('be.visible');
  },

  closeNewWindow() {
    cy.window().then(win => {
      win.close();
    });
  },

  createNewRecord(firstName, lastName, age, email, salary, department) {
    locators.webTablesElementsMenu.addNewButton().click();
    locators.webTablesElementsMenu.firstNameField().type(firstName);
    locators.webTablesElementsMenu.lastNameField().type(lastName);
    locators.webTablesElementsMenu.ageField().type(age);
    locators.webTablesElementsMenu.emailField().type(email);
    locators.webTablesElementsMenu.salaryField().type(salary);
    locators.webTablesElementsMenu.departmentField().type(department);
    locators.webTablesElementsMenu.submitButton().click();
  },

  deleteRecord(rowIndex) {
    locators.webTablesElementsMenu.deleteButton(rowIndex).click();
  },

  fillPracticeForm(firstName, lastName, mobile, _subject, currentAddress) {
    locators.formsPracticeForm.nameField().type(firstName);
    locators.formsPracticeForm.lastNameField().type(lastName);
    locators.formsPracticeForm.mobileField().type(mobile);
    locators.formsPracticeForm.currentAddressField().type(currentAddress);
  },

  selectGender(gender) {
    if (gender === 'Male') {
      locators.formsPracticeForm.genderMale().click();
    } else if (gender === 'Female') {
      locators.formsPracticeForm.genderFemale().click();
    } else {
      locators.formsPracticeForm.genderOther().click();
    }
  },

  submitPracticeForm() {
    locators.formsPracticeForm.submitButton().click();
  },

  startProgressBar() {
    locators.progressBarOption.startButton().click();
  },

  stopProgressBar() {
    locators.progressBarOption.startButton().click();
  },

  resetProgressBar() {
    locators.progressBarOption.resetButton().click();
  },

  verifyProgressBarPercentage(maxValue) {
    locators.progressBarOption.progressPercentage().then((percentage) => {
      expect(parseInt(percentage)).to.be.lessThan(maxValue);
    });
  },

  sortElements() {
    locators.sortableOption.sortableItems().each((item, index) => {
      if (index > 0) {
        cy.dragAndDrop(item, locators.sortableOption.sortableItems().eq(index - 1));
      }
    });
  },

  waitForPageLoad(pageLocator) {
    pageLocator().should('be.visible');
  },

  fillFormAndSubmit(formLocator, data) {
    formLocator.nameField().type(data.firstName);
    formLocator.lastNameField().type(data.lastName);
    formLocator.mobileField().type(data.mobile);
    formLocator.submitButton().click();
  }
};