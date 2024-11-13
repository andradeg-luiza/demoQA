Feature: Interacting with the progress bar

Scenario: Successfully navigating to the Web Tables
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Widgets" section
  And I select the "Progress Bar" option
  Then I should see the Progress Bar page
  
Scenario: Start the progress bar and stop before reaching 25%
  Given I access the website "https://demoqa.com/"
  When I choose the "Widgets" option on the homepage
  And I click on the "Progress Bar" submenu
  And I click the "Start" button
  Then the progress bar value should be less than or equal to 25%

Scenario: Restart the progress bar and reset when it reaches 100%
  Given I access the website "https://demoqa.com/"
  When I choose the "Widgets" option on the homepage
  And I click on the "Progress Bar" submenu
  And I click the "Start" button
  And I wait for the progress bar to reach 100%
  Then I reset the progress bar