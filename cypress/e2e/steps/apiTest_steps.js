let accessToken = '';
let userID = '';

Given(/^I have the API endpoint "([^"]*)"$/, (endpoint) => {
  cy.wrap(endpoint).as('endpoint');
});

When(/^I send a POST request with valid user details$/, function () {
  const userDetails = {
    userName: "testUser",
    password: "Password123"
  };

  cy.get('@endpoint').then(endpoint => {
    cy.request('POST', `${endpoint}/`, userDetails).then(response => {
      expect(response.status).to.equal(201);
      userID = response.body.userID;
      expect(userID).to.exist;
    });
  });
});

Then(/^the API should return a success response with the user ID$/, function () {
  expect(userID).to.exist;
});

Given(/^I have the user credentials$/, function () {
  cy.wrap({
    userName: "testUser",
    password: "Password123"
  }).as('credentials');
});

When(/^I send a POST request to generate a token$/, function () {
  cy.get('@endpoint').then(endpoint => {
    cy.get('@credentials').then(credentials => {
      cy.request('POST', `${endpoint}/`, credentials).then(response => {
        expect(response.status).to.equal(200);
        accessToken = response.body.token;
        expect(accessToken).to.exist;
      });
    });
  });
});

Then(/^the API should return a valid access token$/, function () {
  expect(accessToken).to.exist;
});

When(/^I send a POST request to verify the user authorization$/, function () {
  cy.get('@endpoint').then(endpoint => {
    cy.request({
      method: 'POST',
      url: `${endpoint}/`,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.isAuthorized).to.be.true;
    });
  });
});

When(/^I send a GET request to list available books$/, function () {
  cy.get('@endpoint').then(endpoint => {
    cy.request('GET', `${endpoint}/`).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.books).to.be.an('array');
    });
  });
});

When(/^I send a POST request to reserve two books of my choice$/, function () {
  const booksToReserve = ["bookID1", "bookID2"];

  cy.get('@endpoint').then(endpoint => {
    cy.request({
      method: 'POST',
      url: `${endpoint}/`,
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: { userID, books: booksToReserve }
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.reservedBooks).to.include.members(booksToReserve);
    });
  });
});

When(/^I send a GET request to retrieve user details$/, function () {
  cy.get('@endpoint').then(endpoint => {
    cy.request({
      method: 'GET',
      url: `${endpoint}/${userID}`,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.userID).to.equal(userID);
      expect(response.body.reservedBooks).to.exist;
    });
  });
});