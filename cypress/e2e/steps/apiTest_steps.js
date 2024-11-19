import request from 'supertest';
let accessToken = '';
let userID = '';

Given(/^I have the API endpoint "([^"]*)"$/, (endpoint) => {
  this.endpoint = endpoint;
  return true;
});

When(/^I send a POST request with valid user details$/, () => {
  const userDetails = {
    "userName": "testUser",
    "password": "Password123"
  };

  return request(this.endpoint)
    .post('/')
    .send(userDetails)
    .then(response => {
      userID = response.body.userID;
      expect(response.status).toBe(201);
      expect(response.body.userID).toBeDefined();
    });
});

Then(/^the API should return a success response with the user ID$/, () => {
  expect(userID).toBeDefined();
  return true;
});

Given(/^I have the user credentials$/, () => {
  this.credentials = {
    userName: "testUser",
    password: "Password123"
  };
  return true;
});

When(/^I send a POST request to generate a token$/, () => {
  return request(this.endpoint)
    .post('/')
    .send(this.credentials)
    .then(response => {
      accessToken = response.body.token;
      expect(response.status).toBe(200);
      expect(accessToken).toBeDefined();
    });
});

Then(/^the API should return a valid access token$/, () => {
  expect(accessToken).toBeDefined();
  return true;
});

Given(/^I have the access token and user credentials$/, () => {
  return true;
});

When(/^I send a POST request to verify the user authorization$/, () => {
  return request(this.endpoint)
    .post('/')
    .set('Authorization', `Bearer ${accessToken}`)
    .then(response => {
      expect(response.status).toBe(200);
      expect(response.body.isAuthorized).toBe(true);
    });
});

Then(/^the API should confirm the user is authorized$/, () => {
  return true;
});

Given(/^I have the API endpoint "([^"]*)"$/, (endpoint) => {
  this.endpoint = endpoint;
  return true;
});

When(/^I send a GET request to list available books$/, () => {
  return request(this.endpoint)
    .get('/')
    .then(response => {
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body.books)).toBe(true);
    });
});

Then(/^the API should return a list of available books$/, () => {
  return true;
});

Given(/^I have the user ID and access token$/, () => {
  return true;
});

When(/^I send a POST request to reserve two books of my choice$/, () => {
  const booksToReserve = ["bookID1", "bookID2"];
  return request(this.endpoint)
    .post('/')
    .set('Authorization', `Bearer ${accessToken}`)
    .send({ userID: userID, books: booksToReserve })
    .then(response => {
      expect(response.status).toBe(200);
      expect(response.body.reservedBooks).toEqual(expect.arrayContaining(booksToReserve));
    });
});

Then(/^the API should confirm the books have been reserved$/, () => {
  return true;
});

Given(/^I have the user ID and access token$/, () => {
  return true;
});

When(/^I send a GET request to retrieve user details$/, () => {
  return request(this.endpoint)
    .get(`/${userID}`)
    .set('Authorization', `Bearer ${accessToken}`)
    .then(response => {
      expect(response.status).toBe(200);
      expect(response.body.userID).toBe(userID);
      expect(response.body.reservedBooks).toBeDefined();
    });
});

Then(/^the API should return the user details, including the reserved books$/, () => {
  return true;
});