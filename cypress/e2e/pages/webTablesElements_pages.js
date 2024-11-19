/// <reference types="Cypress" /> 

import WebTablesElements from "../elements/webTablesElements"
const webTablesElements = new WebTablesElements();

class WebTablesElementsPage {
  navigateToUrl(url) {
    cy.visit(url);
  }

  createNewRecord(firstName, lastName, age, email, salary, department) {
    cy.get(webTablesElements.addNewButton()).click();
    cy.get(webTablesElements.firstNameField()).type(firstName);
    cy.get(webTablesElements.lastNameField()).type(lastName);
    cy.get(webTablesElements.ageField()).type(age);
    cy.get(webTablesElements.emailField()).type(email);
    cy.get(webTablesElements.salaryField()).type(salary);
    cy.get(webTablesElements.departmentField()).type(department);
    cy.get(webTablesElements.submitButton()).click();
  }

  verifyNewRecordInTable(firstName, lastName, email) {
    cy.get('table').contains('td', firstName);
    cy.get('table').contains('td', lastName);
    cy.get('table').contains('td', email);
  }

  editRecord(rowIndex, firstName, lastName, age, email, salary, department) {
    cy.get(webTablesElements.editButton(rowIndex)).click();
    cy.get(webTablesElements.firstNameField()).clear().type(firstName);
    cy.get(webTablesElements.lastNameField()).clear().type(lastName);
    cy.get(webTablesElements.ageField()).clear().type(age);
    cy.get(webTablesElements.emailField()).clear().type(email);
    cy.get(webTablesElements.salaryField()).clear().type(salary);
    cy.get(webTablesElements.departmentField()).clear().type(department);
    cy.get(webTablesElements.submitButton()).click();
  }

  verifyUpdatedRecordInTable(firstName, lastName, email) {
    cy.get('table').contains('td', firstName);
    cy.get('table').contains('td', lastName);
    cy.get('table').contains('td', email);
  }

  deleteRecord(rowIndex) {
    cy.get(webTablesElements.deleteButton(rowIndex)).click();
  }

  verifyRecordNotInTable(firstName, lastName) {
    cy.get('table').contains('td', firstName).should('not.exist');
    cy.get('table').contains('td', lastName).should('not.exist');
  }

  createMultipleRecords(records) {
    records.forEach(record => {
      this.createNewRecord(record.firstName, record.lastName, record.age, record.email, record.salary, record.department);
    });
  }

  deleteAllRecords() {
    cy.get('table').find('tbody tr').each(($row) => {
      cy.wrap($row).find('button.delete').click();
    });
  }

  verifyAllRecordsInTable(records) {
    records.forEach(record => {
      cy.get('table').contains('td', record.firstName);
      cy.get('table').contains('td', record.lastName);
      cy.get('table').contains('td', record.email);
    });
  }
}

export default WebTablesElementsPage;