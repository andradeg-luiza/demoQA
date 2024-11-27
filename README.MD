## Functional Documentation

For detailed business rules, acceptance criteria, and the definition of done, please refer to the following link:

[Business Rules Document, Acceptance Criteria, and Definition of Done](https://github.com/andradeg-luiza/demoQA/wiki/Business-Rules-Document,-Acceptance-Criteria,-and-Definition-of-Done)

## Directory Architecture

| Structure                       | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| / - /`cypress`                  | Main Cypress folder for E2E testing.                |
| / - / - /`e2e`                  | Contains End-to-End tests organized in subfolders.  |
| / - / - / - / `elements`        | Defines the element selectors for the tests.        |
| / - / - / - / `feature`         | Contains `.feature` files for the tests.            |
| / - / - / - / `page`            | Contains page with reusable methods.                |
| / - / - / - /`step`             | Defines the Cucumber steps for the tests.           |
| / - / - / `fixtures`            | Contains static data used in the tests.             |
| / - / - / `support`             | Support scripts, such as custom commands.           |
| / - / `.gitignore`              | Lists files and folders to be ignored by Git.       |
| / - / `cypress.config.js`       | Cypress configuration file                          |
| / - / `package-lock.json`       | File that locks npm dependencies versions.          |
| / - / `package.json`            | Contains project dependencies and scripts.          |
| / - / `README.MD`               | Project description, instructions, and information. |

## Flowchart

![Imagem](../fixtures/flowchart.png)

## Tools Used

### Tools and Patterns

-   <img src ="https://img.icons8.com/color/35/000000/javascript.png" width="30"/>
-   <img src="https://www.cypress.io/_astro/navbar-brand.D87396b0.svg" width="55"/>
-   <img src="https://raw.githubusercontent.com/cucumber/.github/refs/heads/main/docs/img/cucumber-open-logo.png" width="130"/>
-   **Page Objects Pattern**

## Summary:

The project is divided into two parts. The first focuses on API automation, and the second focuses on automation of visual elements.

---

## General Guidelines:

Frontend automation will be carried out using JavaScript, Cypress, and Cucumber. The Page Objects pattern will also be used and versioned with GitHub.  
API automation will also be implemented using Cypress, ensuring that all steps are executed continuously with a single run.

---

### API Automation

This involves using several APIs to create a user, authorize them, list available books in the system, reserve two books of choice, and finally, list the details of the created user along with the reserved books.  
The Swagger for the challenge can be consulted at: https://demoqa.com/swagger/.

**Step-by-Step**:

-   Create a user (https://demoqa.com/Account/v1/User)

-   Generate an access token (https://demoqa.com/Account/v1/GenerateToken)

-   Confirm if the created user is authorized (https://demoqa.com/Account/v1/Authorized)

-   List available books (https://demoqa.com/BookStore/v1/Books)

-   Rent two books of choice (https://demoqa.com/BookStore/v1/Books)

-   List user details with the selected books (https://demoqa.com/Account/v1/User/{userID})

### Frontend Automation

#### Part 1

**Step-by-Step**:

-   Access the website https://demoqa.com/

-   Select the "Forms" option on the homepage

-   Click on the "Practice Form" submenu

-   Fill out the entire form with random values

-   The file used for upload must be any `.txt` file and must be present in the appropriate GitHub folder when the project is published

-   Submit the form

-   Ensure that a popup was opened after submission

-   Close the popup

#### Part 2

**Step-by-Step**:

-   Access the website https://demoqa.com/

-   Select the "Alerts, Frame & Windows" option on the homepage

-   Click on the "Browser Windows" submenu

-   Click the "new Windows" button

-   Ensure that a new window was opened, and validate the message “This is a sample page”

-   Close the newly opened window

#### Part 3

**Step-by-Step**:

-   Access the website https://demoqa.com/

-   Select the "Elements" option on the homepage

-   Click on the "Web Tables" submenu

-   Create a new record

-   Edit the newly created record

-   Delete the newly created record

#### Part 4

**Step-by-Step:**

-   Access the website [https://demoqa.com/](https://demoqa.com/)

-   Choose the "Widgets" option on the homepage

-   Click on the "Progress Bar" submenu

-   Click the "Start" button

-   Stop before reaching 25%

-   Validate that the progress bar value is less than or equal to 25%

-   Press "Start" again, and when it reaches 100%, reset the progress bar

#### Part 5

**Step-by-Step**:

-   Access the website https://demoqa.com/

-   Choose the "Interactions" option on the homepage

-   Click on the "Sortable" submenu

-   Using drag and drop methods, place the elements in ascending order

**Additional Tasks**:

-   Dynamically create 12 new records using Cucumber

-   Delete all newly created records

---
