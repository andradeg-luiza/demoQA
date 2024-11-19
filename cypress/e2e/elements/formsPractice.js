class formsPractice {
    title = () => { return '.text-center' }
    nameField = () => { return 'input#firstName' }
    lastNameField = () => { return 'input#lastName' }
    genderMale = () => { return 'label[for="gender-radio-1"]' }
    genderFemale = () => { return 'label[for="gender-radio-2"]' }
    genderOther = () => { return 'label[for="gender-radio-3"]' }
    mobileField = () => { return 'input#userNumber' }
    dobField = () => { return 'input#dateOfBirthInput' }
    dobDay = () => { return 'select.react-datepicker__month-select' }
    dobMonth = () => { return 'select.react-datepicker__year-select' }
    dobYear = () => { return 'div.react-datepicker__day--001' }
    hobbiesSports = () => { return 'label[for="hobbies-checkbox-1"]' }
    hobbiesReading = () => { return 'label[for="hobbies-checkbox-2"]' }
    hobbiesMusic = () => { return 'label[for="hobbies-checkbox-3"]' }
    chooseFileButton = () => { return '#uploadPicture' }
    currentAddressField = () => { return 'textarea#currentAddress' }
    stateSelect = () => { return 'div#state' }
    stateDropdown = () => { return 'div#state input' }
    citySelect = () => { return 'div#city' }
    cityDropdown = () => { return 'div#city input' }
    submitButton = () => { return 'button#submit' }
    closeButton = () => { return '#closeLargeModal'}
}
export default formsPractice;