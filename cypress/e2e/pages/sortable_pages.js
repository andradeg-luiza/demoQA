/// <reference types="Cypress" /> 

import Sortable from "../elements/sortable_elements";
const sortable = new Sortable();

class SortablePage {
  navigateToUrl(url) {
    cy.visit(url);
  }

  dragAndDropItems() {
    cy.get(sortable.sortableItems()).then((items) => {
      const positions = Array.from(items).map((el, idx) => el.offsetTop);

      cy.get(sortable.dragItem(1))
        .trigger("mousedown", { which: 1, force: true })
        .trigger("mousemove", { clientY: positions[5] })
        .trigger("mouseup", { force: true });

      // Continue o mesmo processo para os outros itens...
    });
  }

  verifyListOrder(expectedOrder) {
    cy.get(sortable.sortableItems()).each((item, index) => {
      cy.wrap(item).should('have.text', expectedOrder[index]);
    });
  }
}

export default SortablePage;
