describe('Simple page', () => {
    it('loads', () => {
        cy.visit('/examples/');
        cy.get('h1');
    });

    it('displays focus rectangle on tab navigation', () => {
        cy.visit('/examples/');
        cy.get('.test-link').focus();
        cy.percySnapshot('Simple page - link shows focus', {
            widths: [992]
        });
        cy.get('.test-button').focus();
        cy.percySnapshot('Simple page - button shows focus', {
            widths: [992]
        });
    });

    it('doesnt display focus rectangle on mouse navigation', () => {
        cy.visit('/examples/');
        cy.get('.test-link').click();
        cy.percySnapshot('Simple page - link hides focus', {
            widths: [992]
        });
        cy.get('.test-button').click();
        cy.percySnapshot('Simple page - button hides focus', {
            widths: [992]
        });
    });
});
