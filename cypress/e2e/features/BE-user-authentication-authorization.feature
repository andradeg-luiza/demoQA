Feature: User Authentication and Authorization

Scenario: Generate an Access Token
   Given I have the user login endpoint "https://demoqa.com/Account/v1/GenerateToken"
   And the users valid username and password
   When I send a request to generate an access token
   Then I should receive a response with a status code of 200
   And the response should contain a valid token
   
Scenario: Confirm User Authorization
   Given I have a valid access token for a created user
   When I send a request to "https://demoqa.com/Account/v1/Authorized" with the access token
   Then I should receive a response with a status code of 200
   And the response should indicate that the user is authorized