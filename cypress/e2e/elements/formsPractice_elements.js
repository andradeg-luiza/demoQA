class formsPractice {
    title = () => { return '.text-center' }
    nameField = () => { return 'input#firstName' }
    lastNameField = () => { return 'input#lastName' }
    genderMale = () => { return 'label[for="gender-radio-1"]' }
    genderFemale = () => { return 'label[for="gender-radio-2"]' }
    genderOther = () => { return 'label[for="gender-radio-3"]' }
    mobileField = () => { return 'input#userNumber' }
    subjectField = () => { return '.subjects-auto-complete__value-container'}
    dobField = () => { return 'input#dateOfBirthInput' }
    dobMonth = () => { return '.react-datepicker__month-select' }
    dobYear = () => { return '.react-datepicker__year-select' }
    dobDay = () => { return ':nth-child(1) > .react-datepicker__day--001' }
    hobbiesSports = () => { return 'label[for="hobbies-checkbox-1"]' }
    hobbiesReading = () => { return 'label[for="hobbies-checkbox-2"]' }
    hobbiesMusic = () => { return 'label[for="hobbies-checkbox-3"]' }
    chooseFileButton = () => { return 'input#uploadPicture' }
    currentAddressField = () => { return 'textarea#currentAddress' }
    stateSelect = () => { return 'div#state' }
    stateDropdown = () => { return 'div#state input' }
    citySelect = () => { return 'div#city' }
    cityDropdown = () => { return 'div#city input' }
    submitButton = () => { return 'button#submit' }
    closeButton = () => { return 'input#closeLargeModal' }
}
export default formsPractice;