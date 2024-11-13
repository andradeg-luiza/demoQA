export const locators = {
	homePage: {
		formsField: () => cy.get('.card-body').contains('Forms'),
	},

	formsMenu: {
    titleForm: () => cy.get('h1').contains('Practice Form'),
    formsList: () => cy.get('.header-text').contains('Forms'),
		practiceForm: () => cy.get('.text').contains('Practice Form'),
		firstName: '#firstName',
		lastName: '#lastName',
		userEmail: '#userEmail',
		genderFemale: '#gender-radio-1',
		genderMale: '#gender-radio-2',
		genderOther: '#gender-radio-3',
    phoneNumber: '#userNumber', //aceita 10 caracteres
    dateBirth: '#dateOfBirthInput', //a data tem que ser padrão mm/dd/aaaa
    subjectsArea: '#subjectsContainer',
    hobbiesSports: '#hobbies-checkbox-1',
		hobbiesReading: '#hobbies-checkbox-2',
		hobbiesMusic: '#hobbies-checkbox-3',
    buttonUpload: '#uploadPicture',
    currentAdrdress: '#currentAddress',
    selectState: '#react-select-3-input',
    selectCity: '#react-select-4-input',
    submitButton: '#submit'
	},

  alertsWindowsMenu: {
    titleAlertWindows: () => cy.get('h1').contains('Browser Windows'),
    alerWindowstList: () => cy.get('.header-text').contains('Alerts, Frame & Windows'),
    browserWindows: () => cy.get('.text').contains('Browser Windows'),
    windowButton: '#windowButton' //TODO validações de texto e fechar no steps
	},

  elementsMenu: {
    titleAlertWindows: () => cy.get('h1').contains('Web Tables'),
    alerWindowstList: () => cy.get('.header-text').contains('Elements'),
    browserWindows: () => cy.get('.text').contains('Web Tables'),
    //TODO Finalizar elementos
	}

};
