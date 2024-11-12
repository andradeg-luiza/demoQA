Feature: Bookstore Inventory and Reservation

Scenario: List Available Books
   Given I have access to the books listing endpoint "https://demoqa.com/BookStore/v1/Books"
   When I send a request to list all available books
   Then I should receive a response with a status code of 200
   And the response should contain a list of books with details like title and author
   
Scenario: Rent Two Books of Choice
   Given I have a valid user ID and access token
   And a list of available books
   When I select two books and send a reservation request to "https://demoqa.com/BookStore/v1/Books"
   Then I should receive a response with a status code of 200
   And the response should confirm that both books were reserved for the user