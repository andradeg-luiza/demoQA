/// <reference types="Cypress" /> 

import BrowserWindowsAlerts from "../elements/browserWindowsAlerts_elements";
const browserWindowsAlerts = new BrowserWindowsAlerts();

class BrowserWindowsAlertsPage {
  accessWebsite(url) {
    cy.visit(url);
  }

  clickNewWindowButton() {
    cy.get(browserWindowsAlerts.newWindowButton()).click();
  }
}

export default BrowserWindowsAlertsPage;