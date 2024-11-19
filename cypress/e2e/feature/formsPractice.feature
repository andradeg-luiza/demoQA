Feature: Automation Practice Form Submission  
  As a user, I want to fill out and submit the automation practice form  
  So that I can verify its functionality  

  Scenario: Successfully fill and submit the automation practice form  
    Given I access the website "https://demoqa.com/automation-practice-form"  
    When I fill in the form with random valid data  
    And I upload a ".txt" file from the project's designated folder  
    And I click the "Submit" button  
    Then I should see a popup confirming the form submission  
    And I close the popup