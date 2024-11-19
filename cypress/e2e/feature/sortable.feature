Feature: Sortable List Management  
  As a user, I want to sort the list of numbers  
  So that I can verify that the items are arranged in ascending order  

  Scenario: Sort the list in ascending order using drag and drop  
    Given I access the website "https://demoqa.com/sortable"  
    When I drag and drop the elements to arrange them in ascending order  
    Then the list should display the numbers in the correct order: "one", "two", "three", "four", "five", "six"  
