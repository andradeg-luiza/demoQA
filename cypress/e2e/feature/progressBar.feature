Feature: Progress Bar Management  
  As a user, I want to control the progress bar  
  So that I can validate its progress and reset it when needed  

  Scenario: Stop the progress bar before 25%  
    Given I access the website "https://demoqa.com/progress-bar"  
    When I click the "Start" button  
    And I stop the progress bar before it reaches 25%  
    Then the progress bar value should be less than or equal to 25%  

  Scenario: Reset the progress bar after reaching 100%  
    Given I access the website "https://demoqa.com/progress-bar"  
    When I click the "Start" button  
    And I let the progress bar reach 100%  
    Then the progress bar value should be 100%  
    When I reset the progress bar  
    Then the progress bar value should be reset to 0%  