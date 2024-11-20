Feature: Browser Window Management  
  As a user, I want to interact with browser windows  
  So that I can verify their functionality and content  

  Scenario: Open a new window and validate its content  
    Given I access the website "https://demoqa.com/browser-windows"  
    When I click the "New Window"  
    Then the page should contain the message "This is a sample page"
