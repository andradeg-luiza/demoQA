Feature: User Profile and Reserved Books

Scenario: Retrieve User Details with Reserved Books
   Given I have a valid user ID and access token
   When I send a request to "https://demoqa.com/Account/v1/User/{userID}" with the user ID
   Then I should receive a response with a status code of 200
   And the response should contain the users details and the list of reserved books