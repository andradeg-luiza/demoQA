/// <reference types="Cypress" />

import FormsPractice from "../elements/formsPractice_elements";
const formsPractice = new FormsPractice();

class FormsPracticePage {
  accessWebsite(url) {
    cy.visit(url);
  }

  fillFormWithRandomData() {
    cy.get(formsPractice.nameField()).type('John');
    cy.get(formsPractice.lastNameField()).type('Doe');
    cy.get(formsPractice.genderMale()).click();
    cy.get(formsPractice.mobileField()).type('1234567890');
    cy.get(formsPractice.dobField()).click();
    cy.get(formsPractice.dobMonth()).select('January');
    cy.get(formsPractice.dobYear()).select('1990');
    cy.get(formsPractice.dobDay()).click();

    cy.get(formsPractice.subjectField()).type('Math');
    cy.realPress('Tab');

    cy.get(formsPractice.hobbiesSports()).click();
    cy.get(formsPractice.hobbiesReading()).click();
    cy.get(formsPractice.currentAddressField()).type('123 Main St, Springfield');
    cy.get(formsPractice.stateSelect()).click();
    cy.get(formsPractice.stateDropdown()).type('Uttar Pradesh{enter}');
    cy.get(formsPractice.citySelect()).click();
    cy.get(formsPractice.cityDropdown()).type('Agra{enter}');
  }

  uploadFile(fileName) {
    cy.get(formsPractice.chooseFileButton()).attachFile(fileName);
  }

  clickSubmitButton() {
    cy.get(formsPractice.submitButton()).click();
  }

  verifyPopup() {
    cy.wait(1000);
    cy.get(formsPractice.modalScreen())
      .should('be.visible')
      .within(() => {
        cy.get(formsPractice.modalTitle()).should('contain', 'Thanks for submitting the form');
      });
  }

  closePopup() {
    cy.get(formsPractice.closeButton()).click({ force: true });
  }
}

export default FormsPracticePage;