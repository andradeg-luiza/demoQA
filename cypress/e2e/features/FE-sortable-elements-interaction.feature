Feature: Interacting with sortable elements

Scenario: Successfully navigating to the Web Tables
  Given I am on the "https://demoqa.com/" website
  When I navigate to the "Interactions" section
  And I select the "Sortable" option
  Then I should see the Sortable page

Scenario: Drag and drop elements to sort them in ascending order
  Given I access the website "https://demoqa.com/"
  When I choose the "Interactions" option on the homepage
  And I click on the "Sortable" submenu
  When I drag and drop the elements in ascending order
  Then the elements should be sorted correctly
    
    
    
