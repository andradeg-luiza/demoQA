/// <reference types="Cypress" /> 

import BrowserWindowsAlerts from "../elements/formsPractice_elements"
const browserWindowsAlerts = new BrowserWindowsAlerts();

class BrowserWindowsAlertsPage {
  accessWebsite(url) {
    cy.visit(url);
  }

  clickNewWindowButton() {
    cy.get(browserWindowsAlerts.newWindowButton()).click();
  }

  verifyNewWindow() {
    cy.window().then((win) => {
      const windows = win.open.calls.all();
      expect(windows).to.have.length(1);
    });
  }

  verifyPopupMessage(expectedMessage) {
    cy.window().then((win) => {
      const newWindow = win.open.calls.mostRecent().returnValue;
      cy.wrap(newWindow.document).find(browserWindowsAlerts.popupMessageSampleHeading()).should('have.text', expectedMessage);
    });
  }

  closeNewWindow() {
    cy.window().then((win) => {
      const newWindow = win.open.calls.mostRecent().returnValue;
      newWindow.close();
    });
  }

  returnToOriginalWindow() { }
}

export default BrowserWindowsAlertsPage;
