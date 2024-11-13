import { locators } from '../locators/locators'

export const methods = {
	visitHomePage() {
		cy.visit('/')
	},

	navigateToSection(section) {
		cy.get('.card-body').contains(section).click()
	},

	selectOption(option) {
		cy.get('.text').contains(option).click()
	},

	verifyPageTitle(title) {
		cy.get('h1').contains(title).should('be.visible')
	},

	openNewWindow(buttonLocator, expectedMessage) {
		buttonLocator().invoke('removeAttr', 'target').click();
		cy.contains(expectedMessage).should('be.visible');
	},
	  
	createMultipleRecords(number) {
		for (let i = 0; i < number; i++) {
			locators.elementsMenu.addButton().click()
			locators.elementsMenu.firstName().type(`First${i}`)
			locators.elementsMenu.lastName().type(`Last${i}`)
			locators.elementsMenu.age().type(`${20 + i}`)
			locators.elementsMenu.email().type(`email${i}@example.com`)
			locators.elementsMenu.salary().type(`${3000 + i * 100}`)
			locators.elementsMenu.department().type(`Dept${i}`)
			locators.elementsMenu.submitButton().click()
		}
	},

	deleteAllRecords() {
		locators.elementsMenu.rows().each(() => {
			locators.elementsMenu.deleteButton().click()
		})
	},

	fillPracticeForm(data) {
		locators.formsMenu.firstName().type(data.firstName)
		locators.formsMenu.lastName().type(data.lastName)
		locators.formsMenu.userEmail().type(data.email)
		locators.formsMenu.genderMale().click() // Exemplo para gênero masculino
		locators.formsMenu.phoneNumber().type(data.phone)
		locators.formsMenu.currentAddress().type(data.address)
		locators.formsMenu.selectState().type(`${data.state}{enter}`)
		locators.formsMenu.selectCity().type(`${data.city}{enter}`)
		locators.formsMenu.buttonUpload().attachFile(data.file)
	},

	submitPracticeForm() {
		locators.formsMenu.submitButton().click()
		cy.get('.modal-content').should('be.visible')
	},

	startAndStopProgressBar(stopValue) {
		locators.progressBarPage.startButton().click()
		locators.progressBarPage
			.progressBar()
			.invoke('attr', 'aria-valuenow')
			.then((value) => {
				if (parseInt(value) >= stopValue) {
					locators.progressBarPage.stopButton().click()
				}
			})
	},

	restartAndResetProgressBar() {
		locators.progressBarPage.startButton().click()
		cy.wait(10000) // Ajustar para garantir que o valor alcance 100%
		locators.progressBarPage.resetButton().click()
	},

	dragAndSortElementsInOrder() {
		locators.sortablePage.sortableItems().each(($el, index, $list) => {
			if (index < $list.length - 1) {
				cy.wrap($el).drag($list[index + 1])
			}
		})
	},

	createSingleRecord(data) {
		locators.elementsMenu.addButton().click()
		locators.elementsMenu.firstName().type(data.firstName)
		locators.elementsMenu.lastName().type(data.lastName)
		locators.elementsMenu.age().type(data.age)
		locators.elementsMenu.email().type(data.email)
		locators.elementsMenu.salary().type(data.salary)
		locators.elementsMenu.department().type(data.department)
		locators.elementsMenu.submitButton().click()
	},

	editRecord(data) {
		locators.elementsMenu.editButton().click()
		locators.elementsMenu.firstName().clear().type(data.firstName)
		locators.elementsMenu.lastName().clear().type(data.lastName)
		locators.elementsMenu.age().clear().type(data.age)
		locators.elementsMenu.email().clear().type(data.email)
		locators.elementsMenu.salary().clear().type(data.salary)
		locators.elementsMenu.department().clear().type(data.department)
		locators.elementsMenu.submitButton().click()
	},

	deleteSingleRecord() {
		locators.elementsMenu.deleteButton().click()
	},
}
