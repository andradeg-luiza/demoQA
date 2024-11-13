export const locators = {
	homePage: {
		formsField: () => cy.get('.card-body').contains('Forms'),
	},

	formsMenu: {
		titleForm: () => cy.get('h1').contains('Practice Form'),
		formsList: () => cy.get('.header-text').contains('Forms'),
		practiceFormLink: () => cy.get('.text').contains('Practice Form'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		userEmail: () => cy.get('#userEmail'),
		genderFemale: () => cy.get('#gender-radio-1'),
		genderMale: () => cy.get('#gender-radio-2'),
		genderOther: () => cy.get('#gender-radio-3'),
		phoneNumber: () => cy.get('#userNumber'),
		dateBirth: () => cy.get('#dateOfBirthInput'),
		subjectsArea: () => cy.get('#subjectsContainer'),
		hobbiesSports: () => cy.get('#hobbies-checkbox-1'),
		hobbiesReading: () => cy.get('#hobbies-checkbox-2'),
		hobbiesMusic: () => cy.get('#hobbies-checkbox-3'),
		buttonUpload: () => cy.get('#uploadPicture'),
		currentAddress: () => cy.get('#currentAddress'),
		selectState: () => cy.get('#react-select-3-input'),
		selectCity: () => cy.get('#react-select-4-input'),
		submitButton: () => cy.get('#submit'),
	},

	browserWindowsPage: {
		titleBrowserWindows: () => cy.contains('h1.text-center', 'Browser Windows'),
		browserWindowsForm: () => cy.get('.text').contains('Browser Windows'),
		newTabButton: () => cy.get('#tabButton'),
		newWindowButton: () => cy.get('#windowButton'),
		newMessageWindowButton: () => cy.get('#messageWindowButton'),
	},

	elementsMenu: {
		titleWebTables: () => cy.get('h1').contains('Web Tables'),
		elementsList: () => cy.get('.header-text').contains('Elements'),
		webTablesForm: () => cy.get('.text').contains('Web Tables'),
		addButton: () => cy.get('#addNewRecordButton'),
		editButton: () => cy.get('.action-buttons[title="Edit"]'),
		deleteButton: () => cy.get('[data-toggle="tooltip"][title="Delete"]'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		age: () => cy.get('#age'),
		email: () => cy.get('#userEmail'),
		salary: () => cy.get('#salary'),
		department: () => cy.get('#department'),
		submitButton: () => cy.get('#submit'),
		rows: () => cy.get('.rt-tbody .rt-tr-group'),
	},

	progressBarPage: {
		titleProgressBar: () => cy.get('h1').contains('Progress Bar'),
		progressBarForm: () => cy.get('.text').contains('Progress Bar'),
		progressBar: () => cy.get('#progressBar'),
		startButton: () => cy.get('#startButton'),
		stopButton: () => cy.get('#stopButton'),
		resetButton: () => cy.get('#resetButton'),
		progressValue: () =>
			cy.get('#progressBar').invoke('attr', 'aria-valuenow'),
	},

	sortablePage: {
		titleSortable: () => cy.get('h1').contains('Sortable'),
		sortableList: () => cy.get('#sortable'),
		sortableItems: () => cy.get('#sortable li'),
	},
}
