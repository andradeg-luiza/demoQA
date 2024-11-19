Feature: Web Table Management  
  As a user, I want to manage records in the web table  
  So that I can add, edit, and delete entries dynamically  

  Scenario: Add, edit, and delete a new record  
    Given I access the website "https://demoqa.com/webtables"  
    When I create a new record with valid data  
    Then I should see the new record in the table  
    When I edit the newly created record  
    Then I should see the updated record in the table  
    When I delete the newly created record  
    Then the record should no longer be visible in the table  

  Scenario Outline: Dynamically add and delete multiple records  
    Given I access the website "https://demoqa.com/webtables"  
    When I create the following records dynamically:  
      | first name  | last name  | age   | email   | salary   |  department  |  
      | <firstName> | <lastName> | <age> | <email> | <salary> | <department> |  
    Then I should see all the new records in the table  
    When I delete all the newly created records  
    Then none of the new records should remain in the table  

    Examples:  
      | firstName   | lastName    | age | email               | salary | department   |  
      | John        | Doe         | 28  | john.doe@test.com   | 50000  | Engineering  |  
      | Jane        | Smith       | 34  | jane.smith@test.com | 60000  | HR           |  
      | Alice       | Johnson     | 25  | alice.j@test.com    | 45000  | Marketing    |  
      | Robert      | Brown       | 40  | robert.b@test.com   | 55000  | Finance      |  
      | Emily       | Davis       | 29  | emily.d@test.com    | 47000  | Legal        |  
      | Michael     | Wilson      | 31  | michael.w@test.com  | 51000  | IT           |  
      | Sarah       | Moore       | 27  | sarah.m@test.com    | 52000  | Sales        |  
      | Daniel      | White       | 35  | daniel.w@test.com   | 58000  | Operations   |  
      | Laura       | Taylor      | 24  | laura.t@test.com    | 44000  | Design       |  
      | Matthew     | Anderson    | 30  | matthew.a@test.com  | 50000  | R&D          |  
      | Sophia      | Thomas      | 26  | sophia.t@test.com   | 47000  | Logistics    |  
      | David       | Martin      | 33  | david.m@test.com    | 60000  | Procurement  |  

