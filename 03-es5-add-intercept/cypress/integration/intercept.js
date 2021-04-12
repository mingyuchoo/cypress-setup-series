describe('Intercept', () => {
  it('intercept example"', () => {
    // [1] make mock response
    cy.intercept('GET', '/boards', {
      statusCode: 200,
      headers: { ['content-type']: 'text/html' },
      body: 'it worked!',
    }).as('home');

    // [2] call request
    cy.visit('/boards');

    // [3] wailt until be called '@home
    cy.wait('@home');
  });
});
