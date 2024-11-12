Feature: Browser Window Handling

Scenario: Navigating to the Browser Windows section
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Alerts, Frame & Windows" section
  And I select the "Browser Windows" option
  Then I should see the Browser Windows page

Scenario: Successfully opening a new window and verifying content
  Given I am on the Browser Windows page
  When I click on the "New Window" button
  Then a new window should open with a message that says “This is a sample page”
  And I close the new window