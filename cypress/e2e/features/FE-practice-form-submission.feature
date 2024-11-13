Feature: Practice Form Submission

Scenario: Successfully navigating to the Practice Form
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Forms" section
  And I select the "Practice Form" option
  Then I should see the Practice Form page

Scenario: Filling out the Form and submitting it successfully
  Given I am on the Practice Form page
  When I fill out the form with random values
  And I upload the .txt file
  And I submit the form
  Then all fields should be populated
  And the file should be attached to the form
  And I should see a popup confirming the form submission
  And I close the popup