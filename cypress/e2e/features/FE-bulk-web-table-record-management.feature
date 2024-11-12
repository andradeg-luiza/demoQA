Feature: Bulk Web Table Record Management

Scenario: Dynamically creating multiple records in Web Tables
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Elements" section and select "Web Tables"
  And I dynamically create 12 new records
  Then I should see 12 new records listed in the table

Scenario: Deleting all newly created records in Web Tables
  Given I have 12 newly created records in the Web Tables
  When I delete all newly created records
  Then the table should not contain any of the created records