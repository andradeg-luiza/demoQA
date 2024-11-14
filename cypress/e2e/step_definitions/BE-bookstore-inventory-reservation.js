import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import axios from 'axios';

let availableBooks;
let reservationResponse;

// Scenario 1: List Available Books
Given('I have access to the books listing endpoint {string}', (endpoint) => {
  cy.wrap(endpoint).as('booksEndpoint');
});

When('I send a request to list all available books', function () {
  cy.get('@booksEndpoint').then((endpoint) => {
    axios.get(endpoint)
      .then((response) => {
        cy.wrap(response).as('response');
      })
      .catch((error) => {
        cy.wrap(error).as('error');
      });
  });
});

Then('I should receive a response with a status code of 200', function () {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('the response should contain a list of books with details like title and author', function () {
  cy.get('@response').then((response) => {
    const books = response.data;
    expect(books).to.be.an('array');
    expect(books[0]).to.have.property('title');
    expect(books[0]).to.have.property('author');
    availableBooks = books;
  });
});

// Scenario 2: Rent Two Books of Choice
Given('I have a valid user ID and access token', () => {
  cy.wrap({
    userId: 'validUserId',
    accessToken: 'validAccessToken'
  }).as('userData');
});

Given('a list of available books', () => {
  cy.wrap(availableBooks).as('books');
});

When('I select two books and send a reservation request to {string}', function (endpoint) {
  const booksToReserve = this.books.slice(0, 2); // Reservando os dois primeiros livros da lista
  const { userId, accessToken } = this.userData;

  const requestBody = {
    userId,
    books: booksToReserve
  };

  cy.request({
    method: 'POST',
    url: endpoint,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    body: requestBody
  }).then((response) => {
    cy.wrap(response).as('reservationResponse');
  });
});

Then('I should receive a response with a status code of 200', function () {
  cy.get('@reservationResponse').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('the response should confirm that both books were reserved for the user', function () {
  cy.get('@reservationResponse').then((response) => {
    const { books } = response.body;
    expect(books).to.have.lengthOf(2);
    books.forEach(book => {
      expect(book).to.have.property('title');
      expect(book).to.have.property('author');
    });
  });
});
