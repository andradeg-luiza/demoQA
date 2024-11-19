class webTablesElements {
    title = () => { return 'h5' }
    addNewButton = () => { return '#addNewRecordButton' }
    firstNameField = () => { return 'input#firstName' }
    lastNameField = () => { return 'input#lastName' }
    ageField = () => { return 'input#age' }
    emailField = () => { return 'input#email' }
    salaryField = () => { return 'input#salary' }
    departmentField = () => { return 'input#department' }
    submitButton = () => { return '#submit' }
    editButton = (rowIndex) => { return `.rt-tr-groupnth-child(${rowIndex}) .action-buttons .edit` }
    deleteButton = (rowIndex) => { return `.rt-tr-groupnth-child(${rowIndex}) .action-buttons .delete` }
}
export default webTablesElements;