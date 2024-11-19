/// <reference types="Cypress" /> 

import Sortable from "../elements/sortable_elements"
const sortable = new Sortable();

class SortablePage {
  navigateToUrl(url) {
    cy.visit(url);
  }

  dragAndDropItems() {
    const items = cy.get(sortable.sortableItems());

    cy.get(sortable.dragItem(1)).trigger('dragstart');
    cy.get(sortable.dragItem(2)).trigger('dragover').trigger('drop');
    cy.get(sortable.dragItem(3)).trigger('dragstart');
    cy.get(sortable.dragItem(4)).trigger('dragover').trigger('drop');
    cy.get(sortable.dragItem(5)).trigger('dragstart');
    cy.get(sortable.dragItem(6)).trigger('dragover').trigger('drop');
  }

  verifyListOrder() {
    const expectedOrder = ["one", "two", "three", "four", "five", "six"];

    cy.get(sortable.sortableItems()).each((item, index) => {
      cy.wrap(item).should('contain.text', expectedOrder[index]);
    });
  }
}

export default SortablePage;