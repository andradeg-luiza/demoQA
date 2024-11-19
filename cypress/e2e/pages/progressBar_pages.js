/// <reference types="Cypress" /> 

import ProgressBar from "../elements/progressBar_elements"
const progressBar = new ProgressBar();

class ProgressBarPage {
    navigateToUrl(url) {
        cy.visit(url);
    }

    clickStartButton() {
        cy.get(progressBar.startButton()).click();
    }

    stopProgressBefore25() {
        cy.get(progressBar.progressBar()).should('have.css', 'width').and('be.lessThan', '25%');
    }

    verifyProgressBarLessThan25() {
        cy.get(progressBar.progressBar()).should('have.css', 'width').and('be.lessThan', '25%');
    }

    letProgressBarReach100() {
        cy.get(progressBar.progressBar()).should('have.css', 'width').and('be.lessThan', '100%');
        cy.get(progressBar.startButton()).click();
        cy.get(progressBar.progressBar()).should('have.css', 'width').and('equal', '100%');
    }

    verifyProgressBarEqual100() {
        cy.get(progressBar.progressBar()).should('have.css', 'width').and('equal', '100%');
    }

    clickResetButton() {
        cy.get(progressBar.resetButton()).click();
    }

    verifyProgressBarReset() {
        cy.get(progressBar.progressBar()).should('have.css', 'width').and('equal', '0%');
    }
}

export default ProgressBarPage;