Feature: Web Table Record Management

Scenario: Successfully navigating to the Web Tables
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Elements" section
  And I select the "Web Tables" option
  Then I should see the Web Tables page

Scenario: Successfully creating a new record in Web Tables
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Elements" section
  And I select the "Web Tables" option
  And I create a new record with specified details
  Then I should see the new record listed in the table

Scenario: Successfully editing an existing record in Web Tables
  Given I have an existing record in the Web Tables
  When I edit the record with new details
  Then I should see the updated information in the table

Scenario: Successfully deleting a record in Web Tables
  Given I have an existing record in the Web Tables
  When I delete the record
  Then I should not see the record in the table