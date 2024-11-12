Feature: User Account Creation and Management
  
Scenario: Create a New User
   Given I have the user registration endpoint "https://demoqa.com/Account/v1/User"
   When I send a request with valid user details
   Then I should receive a response with a status code of 201
   And I should see the user ID in the response body