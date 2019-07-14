describe('Simple page', () => {
    it('loads', () => {
        cy.visit('/examples/');
        cy.get('h1');
        cy.percySnapshot('Simple page loads', {
            widths: [992]
        });
    });
});
