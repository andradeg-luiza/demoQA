Feature: Browser Window Management  
  As a user, I want to interact with browser windows  
  So that I can verify their functionality and content  

  Scenario: Open a new window and validate its content  
    Given I access the website "https://demoqa.com/browser-windows"  
    When I click the "New Window" button  
    Then a new browser window should open  
    And the new window should display the message "This is a sample page"  
    When I close the newly opened window  
    Then I should return to the original window  
