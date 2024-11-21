Feature: Progress Bar Management  
  As a user, I want to control the progress bar  
  So that I can validate its progress and reset it when needed  

  Scenario: Stop the progress bar before 25%  
    Given I access the website "https://demoqa.com/progress-bar"  
    When I click the "Start" button on the page 
    And I stop the progress bar  
    Then the progress bar value should be equal to 25%  

  Scenario: Reset the progress bar after reaching 100%  
    Given I access the website "https://demoqa.com/progress-bar"  
    When I click the "Start" button on the page 
    And the progress bar reaches 100%  
    Then the progress bar value should be 100%  
    When I reset the progress bar  
    Then the progress bar value should be 0%  