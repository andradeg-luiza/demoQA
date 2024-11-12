Feature: Practice Form Submission

Scenario: Successfully navigating to the Practice Form
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Forms" section
  And I select the "Practice Form" option
  Then I should see the Practice Form page

Scenario: Filling out the Practice Form with random values
  Given I am on the Practice Form page
  When I fill out the form with random values
  Then all fields should be populated

Scenario: Uploading a file in the Practice Form
  Given I have a .txt file available for upload
  When I upload the .txt file
  Then the file should be attached to the form

Scenario: Successfully submitting the Practice Form and validating the confirmation popup
  Given I have completed the Practice Form
  When I submit the form
  Then I should see a popup confirming the form submission
  And I close the popup