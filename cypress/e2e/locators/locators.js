export const locators = {

	homePage: {
	  formsField: () => cy.get('.card-body').contains('Forms').should('be.visible'),
	},
  
	leftList: {
	  formsMenu: () => cy.get('div.left-pannel a[href="/forms"]').should('be.visible'),
	  practiceFormOption: () => cy.get('div.left-pannel a[href="/automation-practice-form"]').should('be.visible'),
	  alertsMenu: () => cy.get('div.left-pannel a[href="/alertsWindows"]').should('be.visible'),
	  browserWindowOption: () => cy.get('div.left-pannel a[href="/browser-windows"]').should('be.visible'),
	  elementsMenu: () => cy.get('div.left-pannel a[href="/elements"]').should('be.visible'),
	  webTablesOption: () => cy.get('div.left-pannel a[href="/webtables"]').should('be.visible'),
	  widgetsMenu: () => cy.get('div.left-pannel a[href="/widgets"]').should('be.visible'),
	  progressBarOption: () => cy.get('div.left-pannel a[href="/progress-bar"]').should('be.visible'),
	  interactionMenu: () => cy.get('div.left-pannel a[href="/interaction"]').should('be.visible'),
	  sortableOption: () => cy.get('div.left-pannel a[href="/sortable"]').should('be.visible'),
	},
	
	formsPracticeForm: {
		title: () => cy.get('h5').contains('Practice Form').should('be.visible'),
		nameField: () => cy.get('input#firstName').should('be.visible'),
		lastNameField: () => cy.get('input#lastName').should('be.visible'),
		genderMale: () => cy.get('label[for="gender-radio-1"]').should('be.visible'),
		genderFemale: () => cy.get('label[for="gender-radio-2"]').should('be.visible'),
		genderOther: () => cy.get('label[for="gender-radio-3"]').should('be.visible'),
		mobileField: () => cy.get('input#userNumber').should('be.visible'),
		dobField: () => cy.get('input#dateOfBirthInput').should('be.visible'),
		dobDay: () => cy.get('select.react-datepicker__month-select').should('be.visible'),
		dobMonth: () => cy.get('select.react-datepicker__year-select').should('be.visible'),
		dobYear: () => cy.get('div.react-datepicker__day--001').should('be.visible'),
		subjectsField: () => cy.get('input#subjectsInput').should('be.visible'),
		hobbiesSports: () => cy.get('label[for="hobbies-checkbox-1"]').should('be.visible'),
		hobbiesReading: () => cy.get('label[for="hobbies-checkbox-2"]').should('be.visible'),
		hobbiesMusic: () => cy.get('label[for="hobbies-checkbox-3"]').should('be.visible'),
		chooseFileButton: () => cy.get('input#uploadPicture').should('be.visible'),
		currentAddressField: () => cy.get('textarea#currentAddress').should('be.visible'),
		stateSelect: () => cy.get('div#state').should('be.visible'),
		stateDropdown: () => cy.get('div#state input').should('be.visible'),
		citySelect: () => cy.get('div#city').should('be.visible'),
		cityDropdown: () => cy.get('div#city input').should('be.visible'),
		submitButton: () => cy.get('button#submit').should('be.visible'),
	},

	browserWindowsAlerts: {
		title: () => cy.get('div.practice-header h5').contains('Browser Windows').should('be.visible'),
		newWindowButton: () => cy.get('button#windowButton').should('be.visible'),
		newWindowMessage: () => cy.contains('This is a sample page').should('be.visible'),
	},

	webTablesElementsMenu: {
		title: () => cy.get('h5').contains('Web Tables').should('be.visible'),
		addNewButton: () => cy.get('#addNewRecordButton').should('be.visible'),
		firstNameField: () => cy.get('input#firstName').should('be.visible'),
		lastNameField: () => cy.get('input#lastName').should('be.visible'),
		ageField: () => cy.get('input#age').should('be.visible'),
		emailField: () => cy.get('input#email').should('be.visible'),
		salaryField: () => cy.get('input#salary').should('be.visible'),
		departmentField: () => cy.get('input#department').should('be.visible'),
		submitButton: () => cy.get('#submit').should('be.visible'),
		editButton: (rowIndex) => cy.get(`.rt-tr-group:nth-child(${rowIndex}) .action-buttons .edit`).should('be.visible'),
		deleteButton: (rowIndex) => cy.get(`.rt-tr-group:nth-child(${rowIndex}) .action-buttons .delete`).should('be.visible'),
	},

	progressBarOption: {
		title: () => cy.get('h5').contains('Progress Bar').should('be.visible'),
		startButton: () => cy.get('#startStopButton').should('be.visible'),
		progressBar: () => cy.get('.progress-bar').should('be.visible'),
		progressPercentage: () => cy.get('.progress-bar').invoke('attr', 'aria-valuenow'),
		resetButton: () => cy.get('#resetButton').should('be.visible'),
	},

	sortableOption: {
		title: () => cy.get('h5').contains('Sortable').should('be.visible'),
		sortableOption: () => cy.get('div.left-pannel a[href="/sortable"]').should('be.visible'),
		sortableItems: () => cy.get('div#sortable li').should('have.length.greaterThan', 0),
		dragItem: (index) => cy.get(`div#sortable li:nth-child(${index})`),
	}
};