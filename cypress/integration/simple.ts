describe('Simple page', () => {
    it('loads', () => {
        cy.visit('/examples/');
        cy.get('h1');
    });
});
